// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_core_dispenser from './net.minecraft.core.dispenser.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_food from './net.minecraft.world.food.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_inventory_tooltip from './net.minecraft.world.inventory.tooltip.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_context from './net.minecraft.world.item.context.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_pattern from './net.minecraft.world.level.block.state.pattern.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.world.item.AdventureModePredicate. */
export interface AdventureModePredicateMembers {
  addToTooltip(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  readonly predicates: JavaList<j_net_minecraft_advancements_critereon.BlockPredicate>;
  test(arg0: j_net_minecraft_world_level_block_state_pattern.BlockInWorld): boolean;
  toString(): string;
}
export type AdventureModePredicate = AdventureModePredicateMembers;
export interface AdventureModePredicateStatics {
  new(arg0: JavaList<j_net_minecraft_advancements_critereon.BlockPredicate>): AdventureModePredicate;
  readonly CAN_BREAK_HEADER: j_net_minecraft_network_chat.Component;
  readonly CAN_PLACE_HEADER: j_net_minecraft_network_chat.Component;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AdventureModePredicate]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, AdventureModePredicate>;
}

/** JVM class net.minecraft.world.item.AirItem. */
export interface AirItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
}
export type AirItem = AirItemMembers & Item;
export interface AirItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): AirItem;
}

/** JVM class net.minecraft.world.item.ArmorStandItem. */
export interface ArmorStandItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type ArmorStandItem = ArmorStandItemMembers & Item;
export interface ArmorStandItemStatics {
  new(arg0: Item_Properties): ArmorStandItem;
}

/** JVM class net.minecraft.world.item.ArrowItem. */
export interface ArrowItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createArrow(arg0: j_net_minecraft_world_level.Level, arg1: ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: ItemStack | null): j_net_minecraft_world_entity_projectile.AbstractArrow;
}
export type ArrowItem = ArrowItemMembers & Item & ProjectileItem;
export interface ArrowItemStatics {
  new(arg0: Item_Properties): ArrowItem;
}

/** JVM class net.minecraft.world.item.AxeItem. */
export interface AxeItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type AxeItem = AxeItemMembers & Item;
export interface AxeItemStatics {
  new(arg0: ToolMaterial, arg1: number, arg2: number, arg3: Item_Properties): AxeItem;
}

/** JVM class net.minecraft.world.item.BannerItem. */
export interface BannerItemMembers {
  readonly __javaSupertypes?: readonly [StandingAndWallBlockItem];
  getColor(): DyeColor;
}
export type BannerItem = BannerItemMembers & StandingAndWallBlockItem;
export interface BannerItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, arg2: Item_Properties): BannerItem;
}

/** JVM class net.minecraft.world.item.BedItem. */
export interface BedItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
}
export type BedItem = BedItemMembers & BlockItem;
export interface BedItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): BedItem;
}

/** JVM class net.minecraft.world.item.BlockItem. */
export interface BlockItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  canFitInsideContainerItems(): boolean;
  getBlock(): j_net_minecraft_world_level_block.Block;
  onDestroyed(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  place(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world.InteractionResult;
  registerBlocks(arg0: JavaMap<j_net_minecraft_world_level_block.Block, Item>, arg1: Item): void;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  shouldPrintOpWarning(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player | null): boolean;
  updatePlacementContext(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_item_context.BlockPlaceContext | null;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type BlockItem = BlockItemMembers & Item;
export interface BlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): BlockItem;
  setBlockEntityData(arg0: ItemStack, arg1: j_net_minecraft_world_level_block_entity.BlockEntityType<object>, arg2: j_net_minecraft_world_level_storage.TagValueOutput): void;
  updateCustomBlockEntityTag(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_core.BlockPos, arg3: ItemStack): boolean;
}

/** JVM class net.minecraft.world.item.BoatItem. */
export interface BoatItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type BoatItem = BoatItemMembers & Item;
export interface BoatItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_vehicle.AbstractBoat>, arg1: Item_Properties): BoatItem;
}

/** JVM class net.minecraft.world.item.BoneMealItem. */
export interface BoneMealItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type BoneMealItem = BoneMealItemMembers & Item;
export interface BoneMealItemStatics {
  new(arg0: Item_Properties): BoneMealItem;
  readonly GRASS_COUNT_MULTIPLIER: 3;
  readonly GRASS_SPREAD_HEIGHT: 1;
  readonly GRASS_SPREAD_WIDTH: 3;
  addGrowthParticles(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  applyBonemeal(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
  growCrop(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): boolean;
  growWaterPlant(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction | null): boolean;
}

/** JVM class net.minecraft.world.item.BottleItem. */
export interface BottleItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type BottleItem = BottleItemMembers & Item;
export interface BottleItemStatics {
  new(arg0: Item_Properties): BottleItem;
}

/** JVM class net.minecraft.world.item.BowItem. */
export interface BowItemMembers {
  readonly __javaSupertypes?: readonly [ProjectileWeaponItem];
  getAllSupportedProjectiles(): JavaPredicate<ItemStack>;
  getDefaultProjectileRange(): number;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  releaseUsing(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: number): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type BowItem = BowItemMembers & ProjectileWeaponItem;
export interface BowItemStatics {
  new(arg0: Item_Properties): BowItem;
  readonly DEFAULT_RANGE: 15;
  readonly MAX_DRAW_DURATION: 20;
  getPowerForTime(arg0: number): number;
}

/** JVM class net.minecraft.world.item.BrushItem. */
export interface BrushItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  onUseTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: ItemStack, arg3: number): void;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type BrushItem = BrushItemMembers & Item;
export interface BrushItemStatics {
  new(arg0: Item_Properties): BrushItem;
  readonly ANIMATION_DURATION: 10;
}

/** JVM class net.minecraft.world.item.BucketItem. */
export interface BucketItemMembers {
  readonly __javaSupertypes?: readonly [Item, DispensibleContainerItem];
  checkExtraContent(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: ItemStack, arg3: j_net_minecraft_core.BlockPos): void;
  readonly content: j_net_minecraft_world_level_material.Fluid;
  emptyContents(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys.BlockHitResult | null): boolean;
  emptyContents(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys.BlockHitResult | null, arg4: j_net_minecraft_core.Direction, arg5: j_net_minecraft_core.BlockPos, arg6: ItemStack, arg7: j_net_minecraft_world.InteractionHand): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type BucketItem = BucketItemMembers & Item & DispensibleContainerItem;
export interface BucketItemStatics {
  new(arg0: j_net_minecraft_world_level_material.Fluid, arg1: Item_Properties): BucketItem;
  getEmptySuccessItem(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player): ItemStack;
}

/** JVM class net.minecraft.world.item.BundleItem. */
export interface BundleItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getBarColor(arg0: ItemStack): number;
  getBarWidth(arg0: ItemStack): number;
  getTooltipImage(arg0: ItemStack): JavaOptional<j_net_minecraft_world_inventory_tooltip.TooltipComponent>;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  isBarVisible(arg0: ItemStack): boolean;
  onDestroyed(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  onUseTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: ItemStack, arg3: number): void;
  overrideOtherStackedOnMe(arg0: ItemStack, arg1: ItemStack, arg2: j_net_minecraft_world_inventory.Slot, arg3: j_net_minecraft_world_inventory.ClickAction, arg4: j_net_minecraft_world_entity_player.Player, arg5: j_net_minecraft_world_entity.SlotAccess): boolean;
  overrideStackedOnOther(arg0: ItemStack, arg1: j_net_minecraft_world_inventory.Slot, arg2: j_net_minecraft_world_inventory.ClickAction, arg3: j_net_minecraft_world_entity_player.Player): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type BundleItem = BundleItemMembers & Item;
export interface BundleItemStatics {
  new(arg0: Item_Properties): BundleItem;
  readonly MAX_SHOWN_GRID_ITEMS: 12;
  readonly MAX_SHOWN_GRID_ITEMS_X: 4;
  readonly MAX_SHOWN_GRID_ITEMS_Y: 3;
  readonly OVERFLOWING_MAX_SHOWN_GRID_ITEMS: 11;
  getAllBundleItemColors(): JavaList<BundleItem>;
  getByColor(arg0: DyeColor): Item;
  getFullnessDisplay(arg0: ItemStack): number;
  getNumberOfItemsToShow(arg0: ItemStack): number;
  getSelectedItem(arg0: ItemStack): number;
  getSelectedItemStack(arg0: ItemStack): ItemStack;
  hasSelectedItem(arg0: ItemStack): boolean;
  toggleSelectedItem(arg0: ItemStack, arg1: number): void;
}

/** JVM class net.minecraft.world.item.CompassItem. */
export interface CompassItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
  inventoryTick(arg0: ItemStack, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.EquipmentSlot | null): void;
  isFoil(arg0: ItemStack): boolean;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type CompassItem = CompassItemMembers & Item;
export interface CompassItemStatics {
  new(arg0: Item_Properties): CompassItem;
}

/** JVM class net.minecraft.world.item.CreativeModeTab. */
export interface CreativeModeTabMembers {
  buildContents(arg0: CreativeModeTab_ItemDisplayParameters): void;
  canScroll(): boolean;
  column(): number;
  contains(arg0: ItemStack): boolean;
  getBackgroundTexture(): j_net_minecraft_resources.ResourceLocation;
  getDisplayItems(): JavaCollection<ItemStack>;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getIconItem(): ItemStack;
  getSearchTabDisplayItems(): JavaCollection<ItemStack>;
  getType(): CreativeModeTab_Type;
  hasAnyItems(): boolean;
  isAlignedRight(): boolean;
  row(): CreativeModeTab_Row;
  shouldDisplay(): boolean;
  showTitle(): boolean;
}
export type CreativeModeTab = CreativeModeTabMembers;
export interface CreativeModeTabStatics {
  builder(arg0: CreativeModeTab_Row, arg1: number): CreativeModeTab_Builder;
  createTextureLocation(arg0: string): j_net_minecraft_resources.ResourceLocation;
}

/** JVM class net.minecraft.world.item.CreativeModeTab$Builder. */
export interface CreativeModeTab_BuilderMembers {
  alignedRight(): CreativeModeTab_Builder;
  backgroundTexture(arg0: j_net_minecraft_resources.ResourceLocation): CreativeModeTab_Builder;
  build(): CreativeModeTab;
  displayItems(arg0: CreativeModeTab_DisplayItemsGenerator): CreativeModeTab_Builder;
  hideTitle(): CreativeModeTab_Builder;
  icon(arg0: JavaSupplier<ItemStack>): CreativeModeTab_Builder;
  noScrollBar(): CreativeModeTab_Builder;
  title(arg0: j_net_minecraft_network_chat.Component): CreativeModeTab_Builder;
}
export type CreativeModeTab_Builder = CreativeModeTab_BuilderMembers;
export interface CreativeModeTab_BuilderStatics {
  new(arg0: CreativeModeTab_Row, arg1: number): CreativeModeTab_Builder;
}

/** JVM interface net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator. */
export interface CreativeModeTab_DisplayItemsGeneratorMembers {
  accept(arg0: CreativeModeTab_ItemDisplayParameters, arg1: CreativeModeTab_Output): void;
}
export type CreativeModeTab_DisplayItemsGenerator = CreativeModeTab_DisplayItemsGeneratorMembers;
export interface CreativeModeTab_DisplayItemsGeneratorStatics {
}

/** JVM record net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters. */
export interface CreativeModeTab_ItemDisplayParametersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  enabledFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  equals(arg0: object): boolean;
  hasPermissions(): boolean;
  hashCode(): number;
  holders(): j_net_minecraft_core.HolderLookup_Provider;
  needsUpdate(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: boolean, arg2: j_net_minecraft_core.HolderLookup_Provider): boolean;
  toString(): string;
}
export type CreativeModeTab_ItemDisplayParameters = CreativeModeTab_ItemDisplayParametersMembers & JavaOpaque<"java.lang.Record">;
export interface CreativeModeTab_ItemDisplayParametersStatics {
  new(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: boolean, arg2: j_net_minecraft_core.HolderLookup_Provider): CreativeModeTab_ItemDisplayParameters;
}

/** JVM interface net.minecraft.world.item.CreativeModeTab$Output. */
export interface CreativeModeTab_OutputMembers {
  accept(arg0: ItemStack): void;
  accept(arg0: ItemStack, arg1: CreativeModeTab_TabVisibility): void;
  accept(arg0: j_net_minecraft_world_level.ItemLike): void;
  accept(arg0: j_net_minecraft_world_level.ItemLike, arg1: CreativeModeTab_TabVisibility): void;
  acceptAll(arg0: JavaCollection<ItemStack>): void;
  acceptAll(arg0: JavaCollection<ItemStack>, arg1: CreativeModeTab_TabVisibility): void;
}
export type CreativeModeTab_Output = CreativeModeTab_OutputMembers;
export interface CreativeModeTab_OutputStatics {
}

/** Live JVM enum net.minecraft.world.item.CreativeModeTab$Row; constants are host handles, not strings. */
export type CreativeModeTab_Row = JavaEnum<"net.minecraft.world.item.CreativeModeTab$Row", "BOTTOM" | "TOP"> & CreativeModeTab_RowMembers;
export interface CreativeModeTab_RowMembers {
}
export interface CreativeModeTab_RowStatics {
  readonly BOTTOM: CreativeModeTab_Row;
  readonly TOP: CreativeModeTab_Row;
  valueOf(arg0: string): CreativeModeTab_Row;
  values(): Array<CreativeModeTab_Row>;
}

/** Live JVM enum net.minecraft.world.item.CreativeModeTab$TabVisibility; constants are host handles, not strings. */
export type CreativeModeTab_TabVisibility = JavaEnum<"net.minecraft.world.item.CreativeModeTab$TabVisibility", "PARENT_AND_SEARCH_TABS" | "PARENT_TAB_ONLY" | "SEARCH_TAB_ONLY"> & CreativeModeTab_TabVisibilityMembers;
export interface CreativeModeTab_TabVisibilityMembers {
}
export interface CreativeModeTab_TabVisibilityStatics {
  readonly PARENT_AND_SEARCH_TABS: CreativeModeTab_TabVisibility;
  readonly PARENT_TAB_ONLY: CreativeModeTab_TabVisibility;
  readonly SEARCH_TAB_ONLY: CreativeModeTab_TabVisibility;
  valueOf(arg0: string): CreativeModeTab_TabVisibility;
  values(): Array<CreativeModeTab_TabVisibility>;
}

/** Live JVM enum net.minecraft.world.item.CreativeModeTab$Type; constants are host handles, not strings. */
export type CreativeModeTab_Type = JavaEnum<"net.minecraft.world.item.CreativeModeTab$Type", "CATEGORY" | "HOTBAR" | "INVENTORY" | "SEARCH"> & CreativeModeTab_TypeMembers;
export interface CreativeModeTab_TypeMembers {
}
export interface CreativeModeTab_TypeStatics {
  readonly CATEGORY: CreativeModeTab_Type;
  readonly HOTBAR: CreativeModeTab_Type;
  readonly INVENTORY: CreativeModeTab_Type;
  readonly SEARCH: CreativeModeTab_Type;
  valueOf(arg0: string): CreativeModeTab_Type;
  values(): Array<CreativeModeTab_Type>;
}

/** JVM class net.minecraft.world.item.CreativeModeTabs. */
export interface CreativeModeTabsMembers {
}
export type CreativeModeTabs = CreativeModeTabsMembers;
export interface CreativeModeTabsStatics {
  new(): CreativeModeTabs;
  allTabs(): JavaList<CreativeModeTab>;
  bootstrap(arg0: j_net_minecraft_core.Registry<CreativeModeTab>): CreativeModeTab;
  getDefaultTab(): CreativeModeTab;
  searchTab(): CreativeModeTab;
  tabs(): JavaList<CreativeModeTab>;
  tryRebuildTabContents(arg0: j_net_minecraft_world_flag.FeatureFlagSet, arg1: boolean, arg2: j_net_minecraft_core.HolderLookup_Provider): boolean;
  validate(): void;
}

/** JVM class net.minecraft.world.item.CrossbowItem. */
export interface CrossbowItemMembers {
  readonly __javaSupertypes?: readonly [ProjectileWeaponItem];
  getAllSupportedProjectiles(): JavaPredicate<ItemStack>;
  getDefaultProjectileRange(): number;
  getSupportedHeldProjectiles(): JavaPredicate<ItemStack>;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  onUseTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: ItemStack, arg3: number): void;
  performShooting(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world.InteractionHand, arg3: ItemStack, arg4: number, arg5: number, arg6: j_net_minecraft_world_entity.LivingEntity | null): void;
  releaseUsing(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: number): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOnRelease(arg0: ItemStack): boolean;
}
export type CrossbowItem = CrossbowItemMembers & ProjectileWeaponItem;
export interface CrossbowItemStatics {
  new(arg0: Item_Properties): CrossbowItem;
  readonly DEFAULT_RANGE: 8;
  readonly FIREWORK_POWER: 1.6;
  readonly MOB_ARROW_POWER: 1.6;
  getChargeDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  isCharged(arg0: ItemStack): boolean;
}

/** Live JVM enum net.minecraft.world.item.CrossbowItem$ChargeType; constants are host handles, not strings. */
export type CrossbowItem_ChargeType = JavaEnum<"net.minecraft.world.item.CrossbowItem$ChargeType", "ARROW" | "NONE" | "ROCKET"> & CrossbowItem_ChargeTypeMembers;
export interface CrossbowItem_ChargeTypeMembers {
  getSerializedName(): string;
}
export interface CrossbowItem_ChargeTypeStatics {
  readonly ARROW: CrossbowItem_ChargeType;
  readonly NONE: CrossbowItem_ChargeType;
  readonly ROCKET: CrossbowItem_ChargeType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CrossbowItem_ChargeType]>;
  valueOf(arg0: string): CrossbowItem_ChargeType;
  values(): Array<CrossbowItem_ChargeType>;
}

/** JVM record net.minecraft.world.item.CrossbowItem$ChargingSounds. */
export interface CrossbowItem_ChargingSoundsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  end(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  mid(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  start(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  toString(): string;
}
export type CrossbowItem_ChargingSounds = CrossbowItem_ChargingSoundsMembers & JavaOpaque<"java.lang.Record">;
export interface CrossbowItem_ChargingSoundsStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>, arg1: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>, arg2: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>): CrossbowItem_ChargingSounds;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CrossbowItem_ChargingSounds]>;
}

/** JVM class net.minecraft.world.item.DebugStickItem. */
export interface DebugStickItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  canDestroyBlock(arg0: ItemStack, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_entity.LivingEntity): boolean;
  handleInteraction(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.LevelAccessor, arg3: j_net_minecraft_core.BlockPos, arg4: boolean, arg5: ItemStack): boolean;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type DebugStickItem = DebugStickItemMembers & Item;
export interface DebugStickItemStatics {
  new(arg0: Item_Properties): DebugStickItem;
}

/** JVM class net.minecraft.world.item.DiscFragmentItem. */
export interface DiscFragmentItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  appendHoverText(arg0: ItemStack, arg1: Item_TooltipContext, arg2: j_net_minecraft_world_item_component.TooltipDisplay, arg3: JavaConsumer<j_net_minecraft_network_chat.Component>, arg4: TooltipFlag): void;
  getDisplayName(): j_net_minecraft_network_chat.MutableComponent;
}
export type DiscFragmentItem = DiscFragmentItemMembers & Item;
export interface DiscFragmentItemStatics {
  new(arg0: Item_Properties): DiscFragmentItem;
}

/** JVM interface net.minecraft.world.item.DispensibleContainerItem. */
export interface DispensibleContainerItemMembers {
  checkExtraContent(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: ItemStack, arg3: j_net_minecraft_core.BlockPos): void;
  emptyContents(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys.BlockHitResult | null): boolean;
}
export type DispensibleContainerItem = DispensibleContainerItemMembers;
export interface DispensibleContainerItemStatics {
}

/** JVM class net.minecraft.world.item.DoubleHighBlockItem. */
export interface DoubleHighBlockItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
}
export type DoubleHighBlockItem = DoubleHighBlockItemMembers & BlockItem;
export interface DoubleHighBlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): DoubleHighBlockItem;
}

/** Live JVM enum net.minecraft.world.item.DyeColor; constants are host handles, not strings. */
export type DyeColor = JavaEnum<"net.minecraft.world.item.DyeColor", "BLACK" | "BLUE" | "BROWN" | "CYAN" | "GRAY" | "GREEN" | "LIGHT_BLUE" | "LIGHT_GRAY" | "LIME" | "MAGENTA" | "ORANGE" | "PINK" | "PURPLE" | "RED" | "WHITE" | "YELLOW"> & DyeColorMembers;
export interface DyeColorMembers {
  getFireworkColor(): number;
  getId(): number;
  getMapColor(): j_net_minecraft_world_level_material.MapColor;
  getName(): string;
  getSerializedName(): string;
  getTextColor(): number;
  getTextureDiffuseColor(): number;
  toString(): string;
}
export interface DyeColorStatics {
  readonly BLACK: DyeColor;
  readonly BLUE: DyeColor;
  readonly BROWN: DyeColor;
  readonly CYAN: DyeColor;
  readonly GRAY: DyeColor;
  readonly GREEN: DyeColor;
  readonly LIGHT_BLUE: DyeColor;
  readonly LIGHT_GRAY: DyeColor;
  readonly LIME: DyeColor;
  readonly MAGENTA: DyeColor;
  readonly ORANGE: DyeColor;
  readonly PINK: DyeColor;
  readonly PURPLE: DyeColor;
  readonly RED: DyeColor;
  readonly WHITE: DyeColor;
  readonly YELLOW: DyeColor;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<DyeColor>;
  readonly LEGACY_ID_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DyeColor]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, DyeColor>;
  byFireworkColor(arg0: number): DyeColor | null;
  byId(arg0: number): DyeColor;
  byName(arg0: string, arg1: DyeColor | null): DyeColor | null;
  getMixedColor(arg0: j_net_minecraft_server_level.ServerLevel, arg1: DyeColor, arg2: DyeColor): DyeColor;
  valueOf(arg0: string): DyeColor;
  values(): Array<DyeColor>;
}

/** JVM class net.minecraft.world.item.DyeItem. */
export interface DyeItemMembers {
  readonly __javaSupertypes?: readonly [Item, SignApplicator];
  getDyeColor(): DyeColor;
  interactLivingEntity(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  tryApplyToSign(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: j_net_minecraft_world_entity_player.Player): boolean;
}
export type DyeItem = DyeItemMembers & Item & SignApplicator;
export interface DyeItemStatics {
  new(arg0: DyeColor, arg1: Item_Properties): DyeItem;
  byColor(arg0: DyeColor): DyeItem;
}

/** JVM class net.minecraft.world.item.EggItem. */
export interface EggItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type EggItem = EggItemMembers & Item & ProjectileItem;
export interface EggItemStatics {
  new(arg0: Item_Properties): EggItem;
  readonly PROJECTILE_SHOOT_POWER: 1.5;
}

/** JVM record net.minecraft.world.item.EitherHolder. */
export interface EitherHolderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  contents(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_core.Holder<T>, j_net_minecraft_resources.ResourceKey<T>]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): JavaOptional<j_net_minecraft_resources.ResourceKey<T>>;
  toString(): string;
  unwrap(arg0: j_net_minecraft_core.HolderLookup_Provider): JavaOptional<j_net_minecraft_core.Holder<T>>;
  unwrap(arg0: j_net_minecraft_core.Registry<T>): JavaOptional<T>;
}
export type EitherHolder<T = unknown> = EitherHolderMembers<T> & JavaOpaque<"java.lang.Record">;
export interface EitherHolderStatics {
  new<T>(arg0: JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_core.Holder<T>, j_net_minecraft_resources.ResourceKey<T>]>): EitherHolder<T>;
  new<T>(arg0: j_net_minecraft_core.Holder<T>): EitherHolder<T>;
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<T>): EitherHolder<T>;
  codec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<T>]>): JavaOpaque<"com.mojang.serialization.Codec", [EitherHolder<T>]>;
  streamCodec<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<T>>): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, EitherHolder<T>>;
}

/** JVM class net.minecraft.world.item.EmptyMapItem. */
export interface EmptyMapItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type EmptyMapItem = EmptyMapItemMembers & Item;
export interface EmptyMapItemStatics {
  new(arg0: Item_Properties): EmptyMapItem;
}

/** JVM class net.minecraft.world.item.EndCrystalItem. */
export interface EndCrystalItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type EndCrystalItem = EndCrystalItemMembers & Item;
export interface EndCrystalItemStatics {
  new(arg0: Item_Properties): EndCrystalItem;
}

/** JVM class net.minecraft.world.item.EnderEyeItem. */
export interface EnderEyeItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type EnderEyeItem = EnderEyeItemMembers & Item;
export interface EnderEyeItemStatics {
  new(arg0: Item_Properties): EnderEyeItem;
}

/** JVM class net.minecraft.world.item.EnderpearlItem. */
export interface EnderpearlItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type EnderpearlItem = EnderpearlItemMembers & Item;
export interface EnderpearlItemStatics {
  new(arg0: Item_Properties): EnderpearlItem;
  readonly PROJECTILE_SHOOT_POWER: number;
}

/** JVM class net.minecraft.world.item.ExperienceBottleItem. */
export interface ExperienceBottleItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type ExperienceBottleItem = ExperienceBottleItemMembers & Item & ProjectileItem;
export interface ExperienceBottleItemStatics {
  new(arg0: Item_Properties): ExperienceBottleItem;
}

/** JVM class net.minecraft.world.item.FireChargeItem. */
export interface FireChargeItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  shoot(arg0: j_net_minecraft_world_entity_projectile.Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type FireChargeItem = FireChargeItemMembers & Item & ProjectileItem;
export interface FireChargeItemStatics {
  new(arg0: Item_Properties): FireChargeItem;
}

/** JVM class net.minecraft.world.item.FireworkRocketItem. */
export interface FireworkRocketItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type FireworkRocketItem = FireworkRocketItemMembers & Item & ProjectileItem;
export interface FireworkRocketItemStatics {
  new(arg0: Item_Properties): FireworkRocketItem;
  readonly CRAFTABLE_DURATIONS: Array<number>;
  readonly ROCKET_PLACEMENT_OFFSET: 0.15;
}

/** JVM class net.minecraft.world.item.FishingRodItem. */
export interface FishingRodItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type FishingRodItem = FishingRodItemMembers & Item;
export interface FishingRodItemStatics {
  new(arg0: Item_Properties): FishingRodItem;
}

/** JVM class net.minecraft.world.item.FlintAndSteelItem. */
export interface FlintAndSteelItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type FlintAndSteelItem = FlintAndSteelItemMembers & Item;
export interface FlintAndSteelItemStatics {
  new(arg0: Item_Properties): FlintAndSteelItem;
}

/** JVM class net.minecraft.world.item.FoodOnAStickItem. */
export interface FoodOnAStickItemMembers<T /* extends j_net_minecraft_world_entity.ItemSteerable */ = unknown> {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type FoodOnAStickItem<T /* extends j_net_minecraft_world_entity.ItemSteerable */ = unknown> = FoodOnAStickItemMembers<T> & Item;
export interface FoodOnAStickItemStatics {
  new<T /* extends j_net_minecraft_world_entity.ItemSteerable */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: number, arg2: Item_Properties): FoodOnAStickItem<T>;
}

/** JVM class net.minecraft.world.item.GameMasterBlockItem. */
export interface GameMasterBlockItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
}
export type GameMasterBlockItem = GameMasterBlockItemMembers & BlockItem;
export interface GameMasterBlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): GameMasterBlockItem;
}

/** JVM class net.minecraft.world.item.GlowInkSacItem. */
export interface GlowInkSacItemMembers {
  readonly __javaSupertypes?: readonly [Item, SignApplicator];
  tryApplyToSign(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: j_net_minecraft_world_entity_player.Player): boolean;
}
export type GlowInkSacItem = GlowInkSacItemMembers & Item & SignApplicator;
export interface GlowInkSacItemStatics {
  new(arg0: Item_Properties): GlowInkSacItem;
}

/** JVM class net.minecraft.world.item.HangingEntityItem. */
export interface HangingEntityItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  appendHoverText(arg0: ItemStack, arg1: Item_TooltipContext, arg2: j_net_minecraft_world_item_component.TooltipDisplay, arg3: JavaConsumer<j_net_minecraft_network_chat.Component>, arg4: TooltipFlag): void;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type HangingEntityItem = HangingEntityItemMembers & Item;
export interface HangingEntityItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_decoration.HangingEntity>, arg1: Item_Properties): HangingEntityItem;
}

/** JVM class net.minecraft.world.item.HangingSignItem. */
export interface HangingSignItemMembers {
  readonly __javaSupertypes?: readonly [SignItem];
}
export type HangingSignItem = HangingSignItemMembers & SignItem;
export interface HangingSignItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, arg2: Item_Properties): HangingSignItem;
}

/** JVM class net.minecraft.world.item.HoeItem. */
export interface HoeItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type HoeItem = HoeItemMembers & Item;
export interface HoeItemStatics {
  new(arg0: ToolMaterial, arg1: number, arg2: number, arg3: Item_Properties): HoeItem;
  changeIntoState(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaConsumer<j_net_minecraft_world_item_context.UseOnContext>;
  changeIntoStateAndDropItem(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.ItemLike): JavaConsumer<j_net_minecraft_world_item_context.UseOnContext>;
  onlyIfAirAbove(arg0: j_net_minecraft_world_item_context.UseOnContext): boolean;
}

/** JVM class net.minecraft.world.item.HoneycombItem. */
export interface HoneycombItemMembers {
  readonly __javaSupertypes?: readonly [Item, SignApplicator];
  canApplyToSign(arg0: j_net_minecraft_world_level_block_entity.SignText, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  tryApplyToSign(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: j_net_minecraft_world_entity_player.Player): boolean;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type HoneycombItem = HoneycombItemMembers & Item & SignApplicator;
export interface HoneycombItemStatics {
  new(arg0: Item_Properties): HoneycombItem;
  readonly WAXABLES: JavaSupplier<JavaOpaque<"com.google.common.collect.BiMap", [j_net_minecraft_world_level_block.Block, j_net_minecraft_world_level_block.Block]>>;
  readonly WAX_OFF_BY_BLOCK: JavaSupplier<JavaOpaque<"com.google.common.collect.BiMap", [j_net_minecraft_world_level_block.Block, j_net_minecraft_world_level_block.Block]>>;
  getWaxed(arg0: j_net_minecraft_world_level_block_state.BlockState): JavaOptional<j_net_minecraft_world_level_block_state.BlockState>;
}

/** JVM class net.minecraft.world.item.InkSacItem. */
export interface InkSacItemMembers {
  readonly __javaSupertypes?: readonly [Item, SignApplicator];
  tryApplyToSign(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: j_net_minecraft_world_entity_player.Player): boolean;
}
export type InkSacItem = InkSacItemMembers & Item & SignApplicator;
export interface InkSacItemStatics {
  new(arg0: Item_Properties): InkSacItem;
}

/** JVM record net.minecraft.world.item.Instrument. */
export interface InstrumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  range(): number;
  soundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
  useDuration(): number;
}
export type Instrument = InstrumentMembers & JavaOpaque<"java.lang.Record">;
export interface InstrumentStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: number, arg2: number, arg3: j_net_minecraft_network_chat.Component): Instrument;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Instrument>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Instrument]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Instrument>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Instrument>>;
}

/** JVM class net.minecraft.world.item.InstrumentItem. */
export interface InstrumentItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type InstrumentItem = InstrumentItemMembers & Item;
export interface InstrumentItemStatics {
  new(arg0: Item_Properties): InstrumentItem;
  create(arg0: Item, arg1: j_net_minecraft_core.Holder<Instrument>): ItemStack;
}

/** JVM interface net.minecraft.world.item.Instruments. */
export interface InstrumentsMembers {
}
export type Instruments = InstrumentsMembers;
export interface InstrumentsStatics {
  readonly ADMIRE_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly CALL_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly DREAM_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly FEEL_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly GOAT_HORN_DURATION: 7;
  readonly GOAT_HORN_RANGE_BLOCKS: 256;
  readonly PONDER_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly SEEK_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly SING_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  readonly YEARN_GOAT_HORN: j_net_minecraft_resources.ResourceKey<Instrument>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<Instrument>): void;
  register(arg0: j_net_minecraft_data_worldgen.BootstrapContext<Instrument>, arg1: j_net_minecraft_resources.ResourceKey<Instrument>, arg2: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg3: number, arg4: number): void;
}

/** JVM class net.minecraft.world.item.Item. */
export interface ItemMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement, j_net_minecraft_world_level.ItemLike];
  appendHoverText(arg0: ItemStack, arg1: Item_TooltipContext, arg2: j_net_minecraft_world_item_component.TooltipDisplay, arg3: JavaConsumer<j_net_minecraft_network_chat.Component>, arg4: TooltipFlag): void;
  asItem(): Item;
  builtInRegistryHolder(): j_net_minecraft_core.Holder_Reference<Item>;
  canDestroyBlock(arg0: ItemStack, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_world_level.Level, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_entity.LivingEntity): boolean;
  canFitInsideContainerItems(): boolean;
  components(): j_net_minecraft_core_component.DataComponentMap;
  finishUsingItem(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity): ItemStack;
  getAttackDamageBonus(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): number;
  getBarColor(arg0: ItemStack): number;
  getBarWidth(arg0: ItemStack): number;
  getCraftingRemainder(): ItemStack;
  getDamageSource(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_damagesource.DamageSource | null;
  getDefaultInstance(): ItemStack;
  getDefaultMaxStackSize(): number;
  getDescriptionId(): string;
  getDestroySpeed(arg0: ItemStack, arg1: j_net_minecraft_world_level_block_state.BlockState): number;
  getName(): j_net_minecraft_network_chat.Component;
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
  getTooltipImage(arg0: ItemStack): JavaOptional<j_net_minecraft_world_inventory_tooltip.TooltipComponent>;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  hurtEnemy(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  interactLivingEntity(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  inventoryTick(arg0: ItemStack, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.EquipmentSlot | null): void;
  isBarVisible(arg0: ItemStack): boolean;
  isCorrectToolForDrops(arg0: ItemStack, arg1: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isFoil(arg0: ItemStack): boolean;
  mineBlock(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_entity.LivingEntity): boolean;
  onCraftedBy(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player): void;
  onCraftedPostProcess(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level): void;
  onDestroyed(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  onUseTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: ItemStack, arg3: number): void;
  overrideOtherStackedOnMe(arg0: ItemStack, arg1: ItemStack, arg2: j_net_minecraft_world_inventory.Slot, arg3: j_net_minecraft_world_inventory.ClickAction, arg4: j_net_minecraft_world_entity_player.Player, arg5: j_net_minecraft_world_entity.SlotAccess): boolean;
  overrideStackedOnOther(arg0: ItemStack, arg1: j_net_minecraft_world_inventory.Slot, arg2: j_net_minecraft_world_inventory.ClickAction, arg3: j_net_minecraft_world_entity_player.Player): boolean;
  postHurtEnemy(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  releaseUsing(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: number): boolean;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  shouldPrintOpWarning(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player | null): boolean;
  toString(): string;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
  useOnRelease(arg0: ItemStack): boolean;
  verifyComponentsAfterLoad(arg0: ItemStack): void;
}
export type Item = ItemMembers & j_net_minecraft_world_flag.FeatureElement & j_net_minecraft_world_level.ItemLike;
export interface ItemStatics {
  new(arg0: Item_Properties): Item;
  readonly ABSOLUTE_MAX_STACK_SIZE: 99;
  readonly BASE_ATTACK_DAMAGE_ID: j_net_minecraft_resources.ResourceLocation;
  readonly BASE_ATTACK_SPEED_ID: j_net_minecraft_resources.ResourceLocation;
  readonly BY_BLOCK: JavaMap<j_net_minecraft_world_level_block.Block, Item>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<Item>]>;
  readonly DEFAULT_MAX_STACK_SIZE: 64;
  readonly MAX_BAR_WIDTH: 13;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<Item>>;
  byBlock(arg0: j_net_minecraft_world_level_block.Block): Item;
  byId(arg0: number): Item;
  getId(arg0: Item): number;
}

/** JVM class net.minecraft.world.item.Item$Properties. */
export interface Item_PropertiesMembers {
  attributes(arg0: j_net_minecraft_world_item_component.ItemAttributeModifiers): Item_Properties;
  axe(arg0: ToolMaterial, arg1: number, arg2: number): Item_Properties;
  component<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): Item_Properties;
  craftRemainder(arg0: Item): Item_Properties;
  durability(arg0: number): Item_Properties;
  effectiveModel(): j_net_minecraft_resources.ResourceLocation;
  enchantable(arg0: number): Item_Properties;
  equippable(arg0: j_net_minecraft_world_entity.EquipmentSlot): Item_Properties;
  equippableUnswappable(arg0: j_net_minecraft_world_entity.EquipmentSlot): Item_Properties;
  fireResistant(): Item_Properties;
  food(arg0: j_net_minecraft_world_food.FoodProperties): Item_Properties;
  food(arg0: j_net_minecraft_world_food.FoodProperties, arg1: j_net_minecraft_world_item_component.Consumable): Item_Properties;
  hoe(arg0: ToolMaterial, arg1: number, arg2: number): Item_Properties;
  horseArmor(arg0: j_net_minecraft_world_item_equipment.ArmorMaterial): Item_Properties;
  humanoidArmor(arg0: j_net_minecraft_world_item_equipment.ArmorMaterial, arg1: j_net_minecraft_world_item_equipment.ArmorType): Item_Properties;
  jukeboxPlayable(arg0: j_net_minecraft_resources.ResourceKey<JukeboxSong>): Item_Properties;
  overrideDescription(arg0: string): Item_Properties;
  pickaxe(arg0: ToolMaterial, arg1: number, arg2: number): Item_Properties;
  rarity(arg0: Rarity): Item_Properties;
  repairable(arg0: j_net_minecraft_tags.TagKey<Item>): Item_Properties;
  repairable(arg0: Item): Item_Properties;
  requiredFeatures(...arg0: Array<j_net_minecraft_world_flag.FeatureFlag>): Item_Properties;
  setId(arg0: j_net_minecraft_resources.ResourceKey<Item>): Item_Properties;
  shovel(arg0: ToolMaterial, arg1: number, arg2: number): Item_Properties;
  stacksTo(arg0: number): Item_Properties;
  sword(arg0: ToolMaterial, arg1: number, arg2: number): Item_Properties;
  tool(arg0: ToolMaterial, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg2: number, arg3: number, arg4: number): Item_Properties;
  trimMaterial(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): Item_Properties;
  useBlockDescriptionPrefix(): Item_Properties;
  useCooldown(arg0: number): Item_Properties;
  useItemDescriptionPrefix(): Item_Properties;
  usingConvertsTo(arg0: Item): Item_Properties;
  wolfArmor(arg0: j_net_minecraft_world_item_equipment.ArmorMaterial): Item_Properties;
}
export type Item_Properties = Item_PropertiesMembers;
export interface Item_PropertiesStatics {
  new(): Item_Properties;
}

/** JVM interface net.minecraft.world.item.Item$TooltipContext. */
export interface Item_TooltipContextMembers {
  mapData(arg0: j_net_minecraft_world_level_saveddata_maps.MapId): j_net_minecraft_world_level_saveddata_maps.MapItemSavedData | null;
  registries(): j_net_minecraft_core.HolderLookup_Provider | null;
  tickRate(): number;
}
export type Item_TooltipContext = Item_TooltipContextMembers;
export interface Item_TooltipContextStatics {
  readonly EMPTY: Item_TooltipContext;
  of(arg0: j_net_minecraft_core.HolderLookup_Provider): Item_TooltipContext;
  of(arg0: j_net_minecraft_world_level.Level | null): Item_TooltipContext;
}

/** JVM class net.minecraft.world.item.ItemCooldowns. */
export interface ItemCooldownsMembers {
  addCooldown(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number): void;
  addCooldown(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number, arg2: boolean): void;
  addCooldown(arg0: ItemStack, arg1: number): void;
  readonly cooldowns: JavaMap<j_net_minecraft_resources.ResourceLocation, ItemCooldowns_CooldownInstance>;
  getCooldownGroup(arg0: ItemStack): j_net_minecraft_resources.ResourceLocation;
  getCooldownPercent(arg0: ItemStack, arg1: number): number;
  isOnCooldown(arg0: ItemStack): boolean;
  removeCooldown(arg0: j_net_minecraft_resources.ResourceLocation): void;
  tick(): void;
  tickCount: number;
}
export type ItemCooldowns = ItemCooldownsMembers;
export interface ItemCooldownsStatics {
  new(): ItemCooldowns;
}

/** JVM record net.minecraft.world.item.ItemCooldowns$CooldownInstance. */
export interface ItemCooldowns_CooldownInstanceMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  endTime(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  startTime(): number;
  toString(): string;
}
export type ItemCooldowns_CooldownInstance = ItemCooldowns_CooldownInstanceMembers & JavaOpaque<"java.lang.Record">;
export interface ItemCooldowns_CooldownInstanceStatics {
  new(arg0: number, arg1: number): ItemCooldowns_CooldownInstance;
}

/** Live JVM enum net.minecraft.world.item.ItemDisplayContext; constants are host handles, not strings. */
export type ItemDisplayContext = JavaEnum<"net.minecraft.world.item.ItemDisplayContext", "FIRST_PERSON_LEFT_HAND" | "FIRST_PERSON_RIGHT_HAND" | "FIXED" | "GROUND" | "GUI" | "HEAD" | "NONE" | "THIRD_PERSON_LEFT_HAND" | "THIRD_PERSON_RIGHT_HAND"> & ItemDisplayContextMembers;
export interface ItemDisplayContextMembers {
  firstPerson(): boolean;
  getId(): number;
  getSerializedName(): string;
  leftHand(): boolean;
}
export interface ItemDisplayContextStatics {
  readonly FIRST_PERSON_LEFT_HAND: ItemDisplayContext;
  readonly FIRST_PERSON_RIGHT_HAND: ItemDisplayContext;
  readonly FIXED: ItemDisplayContext;
  readonly GROUND: ItemDisplayContext;
  readonly GUI: ItemDisplayContext;
  readonly HEAD: ItemDisplayContext;
  readonly NONE: ItemDisplayContext;
  readonly THIRD_PERSON_LEFT_HAND: ItemDisplayContext;
  readonly THIRD_PERSON_RIGHT_HAND: ItemDisplayContext;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [ItemDisplayContext]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemDisplayContext]>;
  valueOf(arg0: string): ItemDisplayContext;
  values(): Array<ItemDisplayContext>;
}

/** JVM class net.minecraft.world.item.ItemFrameItem. */
export interface ItemFrameItemMembers {
  readonly __javaSupertypes?: readonly [HangingEntityItem];
}
export type ItemFrameItem = ItemFrameItemMembers & HangingEntityItem;
export interface ItemFrameItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_decoration.HangingEntity>, arg1: Item_Properties): ItemFrameItem;
}

/** JVM class net.minecraft.world.item.Items. */
export interface Items_2Members {
}
export type Items_2 = Items_2Members;
export interface Items_2Statics {
  new(): Items_2;
  readonly ACACIA_BOAT: Item;
  readonly ACACIA_BUTTON: Item;
  readonly ACACIA_CHEST_BOAT: Item;
  readonly ACACIA_DOOR: Item;
  readonly ACACIA_FENCE: Item;
  readonly ACACIA_FENCE_GATE: Item;
  readonly ACACIA_HANGING_SIGN: Item;
  readonly ACACIA_LEAVES: Item;
  readonly ACACIA_LOG: Item;
  readonly ACACIA_PLANKS: Item;
  readonly ACACIA_PRESSURE_PLATE: Item;
  readonly ACACIA_SAPLING: Item;
  readonly ACACIA_SIGN: Item;
  readonly ACACIA_SLAB: Item;
  readonly ACACIA_STAIRS: Item;
  readonly ACACIA_TRAPDOOR: Item;
  readonly ACACIA_WOOD: Item;
  readonly ACTIVATOR_RAIL: Item;
  readonly AIR: Item;
  readonly ALLAY_SPAWN_EGG: Item;
  readonly ALLIUM: Item;
  readonly AMETHYST_BLOCK: Item;
  readonly AMETHYST_CLUSTER: Item;
  readonly AMETHYST_SHARD: Item;
  readonly ANCIENT_DEBRIS: Item;
  readonly ANDESITE: Item;
  readonly ANDESITE_SLAB: Item;
  readonly ANDESITE_STAIRS: Item;
  readonly ANDESITE_WALL: Item;
  readonly ANGLER_POTTERY_SHERD: Item;
  readonly ANVIL: Item;
  readonly APPLE: Item;
  readonly ARCHER_POTTERY_SHERD: Item;
  readonly ARMADILLO_SCUTE: Item;
  readonly ARMADILLO_SPAWN_EGG: Item;
  readonly ARMOR_STAND: Item;
  readonly ARMS_UP_POTTERY_SHERD: Item;
  readonly ARROW: Item;
  readonly AXOLOTL_BUCKET: Item;
  readonly AXOLOTL_SPAWN_EGG: Item;
  readonly AZALEA: Item;
  readonly AZALEA_LEAVES: Item;
  readonly AZURE_BLUET: Item;
  readonly BAKED_POTATO: Item;
  readonly BAMBOO: Item;
  readonly BAMBOO_BLOCK: Item;
  readonly BAMBOO_BUTTON: Item;
  readonly BAMBOO_CHEST_RAFT: Item;
  readonly BAMBOO_DOOR: Item;
  readonly BAMBOO_FENCE: Item;
  readonly BAMBOO_FENCE_GATE: Item;
  readonly BAMBOO_HANGING_SIGN: Item;
  readonly BAMBOO_MOSAIC: Item;
  readonly BAMBOO_MOSAIC_SLAB: Item;
  readonly BAMBOO_MOSAIC_STAIRS: Item;
  readonly BAMBOO_PLANKS: Item;
  readonly BAMBOO_PRESSURE_PLATE: Item;
  readonly BAMBOO_RAFT: Item;
  readonly BAMBOO_SIGN: Item;
  readonly BAMBOO_SLAB: Item;
  readonly BAMBOO_STAIRS: Item;
  readonly BAMBOO_TRAPDOOR: Item;
  readonly BARREL: Item;
  readonly BARRIER: Item;
  readonly BASALT: Item;
  readonly BAT_SPAWN_EGG: Item;
  readonly BEACON: Item;
  readonly BEDROCK: Item;
  readonly BEEF: Item;
  readonly BEEHIVE: Item;
  readonly BEETROOT: Item;
  readonly BEETROOT_SEEDS: Item;
  readonly BEETROOT_SOUP: Item;
  readonly BEE_NEST: Item;
  readonly BEE_SPAWN_EGG: Item;
  readonly BELL: Item;
  readonly BIG_DRIPLEAF: Item;
  readonly BIRCH_BOAT: Item;
  readonly BIRCH_BUTTON: Item;
  readonly BIRCH_CHEST_BOAT: Item;
  readonly BIRCH_DOOR: Item;
  readonly BIRCH_FENCE: Item;
  readonly BIRCH_FENCE_GATE: Item;
  readonly BIRCH_HANGING_SIGN: Item;
  readonly BIRCH_LEAVES: Item;
  readonly BIRCH_LOG: Item;
  readonly BIRCH_PLANKS: Item;
  readonly BIRCH_PRESSURE_PLATE: Item;
  readonly BIRCH_SAPLING: Item;
  readonly BIRCH_SIGN: Item;
  readonly BIRCH_SLAB: Item;
  readonly BIRCH_STAIRS: Item;
  readonly BIRCH_TRAPDOOR: Item;
  readonly BIRCH_WOOD: Item;
  readonly BLACKSTONE: Item;
  readonly BLACKSTONE_SLAB: Item;
  readonly BLACKSTONE_STAIRS: Item;
  readonly BLACKSTONE_WALL: Item;
  readonly BLACK_BANNER: Item;
  readonly BLACK_BED: Item;
  readonly BLACK_BUNDLE: Item;
  readonly BLACK_CANDLE: Item;
  readonly BLACK_CARPET: Item;
  readonly BLACK_CONCRETE: Item;
  readonly BLACK_CONCRETE_POWDER: Item;
  readonly BLACK_DYE: Item;
  readonly BLACK_GLAZED_TERRACOTTA: Item;
  readonly BLACK_HARNESS: Item;
  readonly BLACK_SHULKER_BOX: Item;
  readonly BLACK_STAINED_GLASS: Item;
  readonly BLACK_STAINED_GLASS_PANE: Item;
  readonly BLACK_TERRACOTTA: Item;
  readonly BLACK_WOOL: Item;
  readonly BLADE_POTTERY_SHERD: Item;
  readonly BLAST_FURNACE: Item;
  readonly BLAZE_POWDER: Item;
  readonly BLAZE_ROD: Item;
  readonly BLAZE_SPAWN_EGG: Item;
  readonly BLUE_BANNER: Item;
  readonly BLUE_BED: Item;
  readonly BLUE_BUNDLE: Item;
  readonly BLUE_CANDLE: Item;
  readonly BLUE_CARPET: Item;
  readonly BLUE_CONCRETE: Item;
  readonly BLUE_CONCRETE_POWDER: Item;
  readonly BLUE_DYE: Item;
  readonly BLUE_EGG: Item;
  readonly BLUE_GLAZED_TERRACOTTA: Item;
  readonly BLUE_HARNESS: Item;
  readonly BLUE_ICE: Item;
  readonly BLUE_ORCHID: Item;
  readonly BLUE_SHULKER_BOX: Item;
  readonly BLUE_STAINED_GLASS: Item;
  readonly BLUE_STAINED_GLASS_PANE: Item;
  readonly BLUE_TERRACOTTA: Item;
  readonly BLUE_WOOL: Item;
  readonly BOGGED_SPAWN_EGG: Item;
  readonly BOLT_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly BONE: Item;
  readonly BONE_BLOCK: Item;
  readonly BONE_MEAL: Item;
  readonly BOOK: Item;
  readonly BOOKSHELF: Item;
  readonly BORDURE_INDENTED_BANNER_PATTERN: Item;
  readonly BOW: Item;
  readonly BOWL: Item;
  readonly BRAIN_CORAL: Item;
  readonly BRAIN_CORAL_BLOCK: Item;
  readonly BRAIN_CORAL_FAN: Item;
  readonly BREAD: Item;
  readonly BREEZE_ROD: Item;
  readonly BREEZE_SPAWN_EGG: Item;
  readonly BREWER_POTTERY_SHERD: Item;
  readonly BREWING_STAND: Item;
  readonly BRICK: Item;
  readonly BRICKS: Item;
  readonly BRICK_SLAB: Item;
  readonly BRICK_STAIRS: Item;
  readonly BRICK_WALL: Item;
  readonly BROWN_BANNER: Item;
  readonly BROWN_BED: Item;
  readonly BROWN_BUNDLE: Item;
  readonly BROWN_CANDLE: Item;
  readonly BROWN_CARPET: Item;
  readonly BROWN_CONCRETE: Item;
  readonly BROWN_CONCRETE_POWDER: Item;
  readonly BROWN_DYE: Item;
  readonly BROWN_EGG: Item;
  readonly BROWN_GLAZED_TERRACOTTA: Item;
  readonly BROWN_HARNESS: Item;
  readonly BROWN_MUSHROOM: Item;
  readonly BROWN_MUSHROOM_BLOCK: Item;
  readonly BROWN_SHULKER_BOX: Item;
  readonly BROWN_STAINED_GLASS: Item;
  readonly BROWN_STAINED_GLASS_PANE: Item;
  readonly BROWN_TERRACOTTA: Item;
  readonly BROWN_WOOL: Item;
  readonly BRUSH: Item;
  readonly BUBBLE_CORAL: Item;
  readonly BUBBLE_CORAL_BLOCK: Item;
  readonly BUBBLE_CORAL_FAN: Item;
  readonly BUCKET: Item;
  readonly BUDDING_AMETHYST: Item;
  readonly BUNDLE: Item;
  readonly BURN_POTTERY_SHERD: Item;
  readonly BUSH: Item;
  readonly CACTUS: Item;
  readonly CACTUS_FLOWER: Item;
  readonly CAKE: Item;
  readonly CALCITE: Item;
  readonly CALIBRATED_SCULK_SENSOR: Item;
  readonly CAMEL_SPAWN_EGG: Item;
  readonly CAMPFIRE: Item;
  readonly CANDLE: Item;
  readonly CARROT: Item;
  readonly CARROT_ON_A_STICK: Item;
  readonly CARTOGRAPHY_TABLE: Item;
  readonly CARVED_PUMPKIN: Item;
  readonly CAT_SPAWN_EGG: Item;
  readonly CAULDRON: Item;
  readonly CAVE_SPIDER_SPAWN_EGG: Item;
  readonly CHAIN: Item;
  readonly CHAINMAIL_BOOTS: Item;
  readonly CHAINMAIL_CHESTPLATE: Item;
  readonly CHAINMAIL_HELMET: Item;
  readonly CHAINMAIL_LEGGINGS: Item;
  readonly CHAIN_COMMAND_BLOCK: Item;
  readonly CHARCOAL: Item;
  readonly CHERRY_BOAT: Item;
  readonly CHERRY_BUTTON: Item;
  readonly CHERRY_CHEST_BOAT: Item;
  readonly CHERRY_DOOR: Item;
  readonly CHERRY_FENCE: Item;
  readonly CHERRY_FENCE_GATE: Item;
  readonly CHERRY_HANGING_SIGN: Item;
  readonly CHERRY_LEAVES: Item;
  readonly CHERRY_LOG: Item;
  readonly CHERRY_PLANKS: Item;
  readonly CHERRY_PRESSURE_PLATE: Item;
  readonly CHERRY_SAPLING: Item;
  readonly CHERRY_SIGN: Item;
  readonly CHERRY_SLAB: Item;
  readonly CHERRY_STAIRS: Item;
  readonly CHERRY_TRAPDOOR: Item;
  readonly CHERRY_WOOD: Item;
  readonly CHEST: Item;
  readonly CHEST_MINECART: Item;
  readonly CHICKEN: Item;
  readonly CHICKEN_SPAWN_EGG: Item;
  readonly CHIPPED_ANVIL: Item;
  readonly CHISELED_BOOKSHELF: Item;
  readonly CHISELED_COPPER: Item;
  readonly CHISELED_DEEPSLATE: Item;
  readonly CHISELED_NETHER_BRICKS: Item;
  readonly CHISELED_POLISHED_BLACKSTONE: Item;
  readonly CHISELED_QUARTZ_BLOCK: Item;
  readonly CHISELED_RED_SANDSTONE: Item;
  readonly CHISELED_RESIN_BRICKS: Item;
  readonly CHISELED_SANDSTONE: Item;
  readonly CHISELED_STONE_BRICKS: Item;
  readonly CHISELED_TUFF: Item;
  readonly CHISELED_TUFF_BRICKS: Item;
  readonly CHORUS_FLOWER: Item;
  readonly CHORUS_FRUIT: Item;
  readonly CHORUS_PLANT: Item;
  readonly CLAY: Item;
  readonly CLAY_BALL: Item;
  readonly CLOCK: Item;
  readonly CLOSED_EYEBLOSSOM: Item;
  readonly COAL: Item;
  readonly COAL_BLOCK: Item;
  readonly COAL_ORE: Item;
  readonly COARSE_DIRT: Item;
  readonly COAST_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly COBBLED_DEEPSLATE: Item;
  readonly COBBLED_DEEPSLATE_SLAB: Item;
  readonly COBBLED_DEEPSLATE_STAIRS: Item;
  readonly COBBLED_DEEPSLATE_WALL: Item;
  readonly COBBLESTONE: Item;
  readonly COBBLESTONE_SLAB: Item;
  readonly COBBLESTONE_STAIRS: Item;
  readonly COBBLESTONE_WALL: Item;
  readonly COBWEB: Item;
  readonly COCOA_BEANS: Item;
  readonly COD: Item;
  readonly COD_BUCKET: Item;
  readonly COD_SPAWN_EGG: Item;
  readonly COMMAND_BLOCK: Item;
  readonly COMMAND_BLOCK_MINECART: Item;
  readonly COMPARATOR: Item;
  readonly COMPASS: Item;
  readonly COMPOSTER: Item;
  readonly CONDUIT: Item;
  readonly COOKED_BEEF: Item;
  readonly COOKED_CHICKEN: Item;
  readonly COOKED_COD: Item;
  readonly COOKED_MUTTON: Item;
  readonly COOKED_PORKCHOP: Item;
  readonly COOKED_RABBIT: Item;
  readonly COOKED_SALMON: Item;
  readonly COOKIE: Item;
  readonly COPPER_BLOCK: Item;
  readonly COPPER_BULB: Item;
  readonly COPPER_DOOR: Item;
  readonly COPPER_GRATE: Item;
  readonly COPPER_INGOT: Item;
  readonly COPPER_ORE: Item;
  readonly COPPER_TRAPDOOR: Item;
  readonly CORNFLOWER: Item;
  readonly COW_SPAWN_EGG: Item;
  readonly CRACKED_DEEPSLATE_BRICKS: Item;
  readonly CRACKED_DEEPSLATE_TILES: Item;
  readonly CRACKED_NETHER_BRICKS: Item;
  readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: Item;
  readonly CRACKED_STONE_BRICKS: Item;
  readonly CRAFTER: Item;
  readonly CRAFTING_TABLE: Item;
  readonly CREAKING_HEART: Item;
  readonly CREAKING_SPAWN_EGG: Item;
  readonly CREEPER_BANNER_PATTERN: Item;
  readonly CREEPER_HEAD: Item;
  readonly CREEPER_SPAWN_EGG: Item;
  readonly CRIMSON_BUTTON: Item;
  readonly CRIMSON_DOOR: Item;
  readonly CRIMSON_FENCE: Item;
  readonly CRIMSON_FENCE_GATE: Item;
  readonly CRIMSON_FUNGUS: Item;
  readonly CRIMSON_HANGING_SIGN: Item;
  readonly CRIMSON_HYPHAE: Item;
  readonly CRIMSON_NYLIUM: Item;
  readonly CRIMSON_PLANKS: Item;
  readonly CRIMSON_PRESSURE_PLATE: Item;
  readonly CRIMSON_ROOTS: Item;
  readonly CRIMSON_SIGN: Item;
  readonly CRIMSON_SLAB: Item;
  readonly CRIMSON_STAIRS: Item;
  readonly CRIMSON_STEM: Item;
  readonly CRIMSON_TRAPDOOR: Item;
  readonly CROSSBOW: Item;
  readonly CRYING_OBSIDIAN: Item;
  readonly CUT_COPPER: Item;
  readonly CUT_COPPER_SLAB: Item;
  readonly CUT_COPPER_STAIRS: Item;
  readonly CUT_RED_SANDSTONE: Item;
  readonly CUT_RED_SANDSTONE_SLAB: Item;
  readonly CUT_SANDSTONE: Item;
  readonly CUT_STANDSTONE_SLAB: Item;
  readonly CYAN_BANNER: Item;
  readonly CYAN_BED: Item;
  readonly CYAN_BUNDLE: Item;
  readonly CYAN_CANDLE: Item;
  readonly CYAN_CARPET: Item;
  readonly CYAN_CONCRETE: Item;
  readonly CYAN_CONCRETE_POWDER: Item;
  readonly CYAN_DYE: Item;
  readonly CYAN_GLAZED_TERRACOTTA: Item;
  readonly CYAN_HARNESS: Item;
  readonly CYAN_SHULKER_BOX: Item;
  readonly CYAN_STAINED_GLASS: Item;
  readonly CYAN_STAINED_GLASS_PANE: Item;
  readonly CYAN_TERRACOTTA: Item;
  readonly CYAN_WOOL: Item;
  readonly DAMAGED_ANVIL: Item;
  readonly DANDELION: Item;
  readonly DANGER_POTTERY_SHERD: Item;
  readonly DARK_OAK_BOAT: Item;
  readonly DARK_OAK_BUTTON: Item;
  readonly DARK_OAK_CHEST_BOAT: Item;
  readonly DARK_OAK_DOOR: Item;
  readonly DARK_OAK_FENCE: Item;
  readonly DARK_OAK_FENCE_GATE: Item;
  readonly DARK_OAK_HANGING_SIGN: Item;
  readonly DARK_OAK_LEAVES: Item;
  readonly DARK_OAK_LOG: Item;
  readonly DARK_OAK_PLANKS: Item;
  readonly DARK_OAK_PRESSURE_PLATE: Item;
  readonly DARK_OAK_SAPLING: Item;
  readonly DARK_OAK_SIGN: Item;
  readonly DARK_OAK_SLAB: Item;
  readonly DARK_OAK_STAIRS: Item;
  readonly DARK_OAK_TRAPDOOR: Item;
  readonly DARK_OAK_WOOD: Item;
  readonly DARK_PRISMARINE: Item;
  readonly DARK_PRISMARINE_SLAB: Item;
  readonly DARK_PRISMARINE_STAIRS: Item;
  readonly DAYLIGHT_DETECTOR: Item;
  readonly DEAD_BRAIN_CORAL: Item;
  readonly DEAD_BRAIN_CORAL_BLOCK: Item;
  readonly DEAD_BRAIN_CORAL_FAN: Item;
  readonly DEAD_BUBBLE_CORAL: Item;
  readonly DEAD_BUBBLE_CORAL_BLOCK: Item;
  readonly DEAD_BUBBLE_CORAL_FAN: Item;
  readonly DEAD_BUSH: Item;
  readonly DEAD_FIRE_CORAL: Item;
  readonly DEAD_FIRE_CORAL_BLOCK: Item;
  readonly DEAD_FIRE_CORAL_FAN: Item;
  readonly DEAD_HORN_CORAL: Item;
  readonly DEAD_HORN_CORAL_BLOCK: Item;
  readonly DEAD_HORN_CORAL_FAN: Item;
  readonly DEAD_TUBE_CORAL: Item;
  readonly DEAD_TUBE_CORAL_BLOCK: Item;
  readonly DEAD_TUBE_CORAL_FAN: Item;
  readonly DEBUG_STICK: Item;
  readonly DECORATED_POT: Item;
  readonly DEEPSLATE: Item;
  readonly DEEPSLATE_BRICKS: Item;
  readonly DEEPSLATE_BRICK_SLAB: Item;
  readonly DEEPSLATE_BRICK_STAIRS: Item;
  readonly DEEPSLATE_BRICK_WALL: Item;
  readonly DEEPSLATE_COAL_ORE: Item;
  readonly DEEPSLATE_COPPER_ORE: Item;
  readonly DEEPSLATE_DIAMOND_ORE: Item;
  readonly DEEPSLATE_EMERALD_ORE: Item;
  readonly DEEPSLATE_GOLD_ORE: Item;
  readonly DEEPSLATE_IRON_ORE: Item;
  readonly DEEPSLATE_LAPIS_ORE: Item;
  readonly DEEPSLATE_REDSTONE_ORE: Item;
  readonly DEEPSLATE_TILES: Item;
  readonly DEEPSLATE_TILE_SLAB: Item;
  readonly DEEPSLATE_TILE_STAIRS: Item;
  readonly DEEPSLATE_TILE_WALL: Item;
  readonly DETECTOR_RAIL: Item;
  readonly DIAMOND: Item;
  readonly DIAMOND_AXE: Item;
  readonly DIAMOND_BLOCK: Item;
  readonly DIAMOND_BOOTS: Item;
  readonly DIAMOND_CHESTPLATE: Item;
  readonly DIAMOND_HELMET: Item;
  readonly DIAMOND_HOE: Item;
  readonly DIAMOND_HORSE_ARMOR: Item;
  readonly DIAMOND_LEGGINGS: Item;
  readonly DIAMOND_ORE: Item;
  readonly DIAMOND_PICKAXE: Item;
  readonly DIAMOND_SHOVEL: Item;
  readonly DIAMOND_SWORD: Item;
  readonly DIORITE: Item;
  readonly DIORITE_SLAB: Item;
  readonly DIORITE_STAIRS: Item;
  readonly DIORITE_WALL: Item;
  readonly DIRT: Item;
  readonly DIRT_PATH: Item;
  readonly DISC_FRAGMENT_5: Item;
  readonly DISPENSER: Item;
  readonly DOLPHIN_SPAWN_EGG: Item;
  readonly DONKEY_SPAWN_EGG: Item;
  readonly DRAGON_BREATH: Item;
  readonly DRAGON_EGG: Item;
  readonly DRAGON_HEAD: Item;
  readonly DRIED_GHAST: Item;
  readonly DRIED_KELP: Item;
  readonly DRIED_KELP_BLOCK: Item;
  readonly DRIPSTONE_BLOCK: Item;
  readonly DROPPER: Item;
  readonly DROWNED_SPAWN_EGG: Item;
  readonly DRY_SHORT_GRASS: Item;
  readonly DRY_TALL_GRASS: Item;
  readonly DUNE_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly ECHO_SHARD: Item;
  readonly EGG: Item;
  readonly ELDER_GUARDIAN_SPAWN_EGG: Item;
  readonly ELYTRA: Item;
  readonly EMERALD: Item;
  readonly EMERALD_BLOCK: Item;
  readonly EMERALD_ORE: Item;
  readonly ENCHANTED_BOOK: Item;
  readonly ENCHANTED_GOLDEN_APPLE: Item;
  readonly ENCHANTING_TABLE: Item;
  readonly ENDERMAN_SPAWN_EGG: Item;
  readonly ENDERMITE_SPAWN_EGG: Item;
  readonly ENDER_CHEST: Item;
  readonly ENDER_DRAGON_SPAWN_EGG: Item;
  readonly ENDER_EYE: Item;
  readonly ENDER_PEARL: Item;
  readonly END_CRYSTAL: Item;
  readonly END_PORTAL_FRAME: Item;
  readonly END_ROD: Item;
  readonly END_STONE: Item;
  readonly END_STONE_BRICKS: Item;
  readonly END_STONE_BRICK_SLAB: Item;
  readonly END_STONE_BRICK_STAIRS: Item;
  readonly END_STONE_BRICK_WALL: Item;
  readonly EVOKER_SPAWN_EGG: Item;
  readonly EXPERIENCE_BOTTLE: Item;
  readonly EXPLORER_POTTERY_SHERD: Item;
  readonly EXPOSED_CHISELED_COPPER: Item;
  readonly EXPOSED_COPPER: Item;
  readonly EXPOSED_COPPER_BULB: Item;
  readonly EXPOSED_COPPER_DOOR: Item;
  readonly EXPOSED_COPPER_GRATE: Item;
  readonly EXPOSED_COPPER_TRAPDOOR: Item;
  readonly EXPOSED_CUT_COPPER: Item;
  readonly EXPOSED_CUT_COPPER_SLAB: Item;
  readonly EXPOSED_CUT_COPPER_STAIRS: Item;
  readonly EYE_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly FARMLAND: Item;
  readonly FEATHER: Item;
  readonly FERMENTED_SPIDER_EYE: Item;
  readonly FERN: Item;
  readonly FIELD_MASONED_BANNER_PATTERN: Item;
  readonly FILLED_MAP: Item;
  readonly FIREFLY_BUSH: Item;
  readonly FIREWORK_ROCKET: Item;
  readonly FIREWORK_STAR: Item;
  readonly FIRE_CHARGE: Item;
  readonly FIRE_CORAL: Item;
  readonly FIRE_CORAL_BLOCK: Item;
  readonly FIRE_CORAL_FAN: Item;
  readonly FISHING_ROD: Item;
  readonly FLETCHING_TABLE: Item;
  readonly FLINT: Item;
  readonly FLINT_AND_STEEL: Item;
  readonly FLOWERING_AZALEA: Item;
  readonly FLOWERING_AZALEA_LEAVES: Item;
  readonly FLOWER_BANNER_PATTERN: Item;
  readonly FLOWER_POT: Item;
  readonly FLOW_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly FLOW_BANNER_PATTERN: Item;
  readonly FLOW_POTTERY_SHERD: Item;
  readonly FOX_SPAWN_EGG: Item;
  readonly FRIEND_POTTERY_SHERD: Item;
  readonly FROGSPAWN: Item;
  readonly FROG_SPAWN_EGG: Item;
  readonly FURNACE: Item;
  readonly FURNACE_MINECART: Item;
  readonly GHAST_SPAWN_EGG: Item;
  readonly GHAST_TEAR: Item;
  readonly GILDED_BLACKSTONE: Item;
  readonly GLASS: Item;
  readonly GLASS_BOTTLE: Item;
  readonly GLASS_PANE: Item;
  readonly GLISTERING_MELON_SLICE: Item;
  readonly GLOBE_BANNER_PATTERN: Item;
  readonly GLOWSTONE: Item;
  readonly GLOWSTONE_DUST: Item;
  readonly GLOW_BERRIES: Item;
  readonly GLOW_INK_SAC: Item;
  readonly GLOW_ITEM_FRAME: Item;
  readonly GLOW_LICHEN: Item;
  readonly GLOW_SQUID_SPAWN_EGG: Item;
  readonly GOAT_HORN: Item;
  readonly GOAT_SPAWN_EGG: Item;
  readonly GOLDEN_APPLE: Item;
  readonly GOLDEN_AXE: Item;
  readonly GOLDEN_BOOTS: Item;
  readonly GOLDEN_CARROT: Item;
  readonly GOLDEN_CHESTPLATE: Item;
  readonly GOLDEN_HELMET: Item;
  readonly GOLDEN_HOE: Item;
  readonly GOLDEN_HORSE_ARMOR: Item;
  readonly GOLDEN_LEGGINGS: Item;
  readonly GOLDEN_PICKAXE: Item;
  readonly GOLDEN_SHOVEL: Item;
  readonly GOLDEN_SWORD: Item;
  readonly GOLD_BLOCK: Item;
  readonly GOLD_INGOT: Item;
  readonly GOLD_NUGGET: Item;
  readonly GOLD_ORE: Item;
  readonly GRANITE: Item;
  readonly GRANITE_SLAB: Item;
  readonly GRANITE_STAIRS: Item;
  readonly GRANITE_WALL: Item;
  readonly GRASS_BLOCK: Item;
  readonly GRAVEL: Item;
  readonly GRAY_BANNER: Item;
  readonly GRAY_BED: Item;
  readonly GRAY_BUNDLE: Item;
  readonly GRAY_CANDLE: Item;
  readonly GRAY_CARPET: Item;
  readonly GRAY_CONCRETE: Item;
  readonly GRAY_CONCRETE_POWDER: Item;
  readonly GRAY_DYE: Item;
  readonly GRAY_GLAZED_TERRACOTTA: Item;
  readonly GRAY_HARNESS: Item;
  readonly GRAY_SHULKER_BOX: Item;
  readonly GRAY_STAINED_GLASS: Item;
  readonly GRAY_STAINED_GLASS_PANE: Item;
  readonly GRAY_TERRACOTTA: Item;
  readonly GRAY_WOOL: Item;
  readonly GREEN_BANNER: Item;
  readonly GREEN_BED: Item;
  readonly GREEN_BUNDLE: Item;
  readonly GREEN_CANDLE: Item;
  readonly GREEN_CARPET: Item;
  readonly GREEN_CONCRETE: Item;
  readonly GREEN_CONCRETE_POWDER: Item;
  readonly GREEN_DYE: Item;
  readonly GREEN_GLAZED_TERRACOTTA: Item;
  readonly GREEN_HARNESS: Item;
  readonly GREEN_SHULKER_BOX: Item;
  readonly GREEN_STAINED_GLASS: Item;
  readonly GREEN_STAINED_GLASS_PANE: Item;
  readonly GREEN_TERRACOTTA: Item;
  readonly GREEN_WOOL: Item;
  readonly GRINDSTONE: Item;
  readonly GUARDIAN_SPAWN_EGG: Item;
  readonly GUNPOWDER: Item;
  readonly GUSTER_BANNER_PATTERN: Item;
  readonly GUSTER_POTTERY_SHERD: Item;
  readonly HANGING_ROOTS: Item;
  readonly HAPPY_GHAST_SPAWN_EGG: Item;
  readonly HAY_BLOCK: Item;
  readonly HEARTBREAK_POTTERY_SHERD: Item;
  readonly HEART_OF_THE_SEA: Item;
  readonly HEART_POTTERY_SHERD: Item;
  readonly HEAVY_CORE: Item;
  readonly HEAVY_WEIGHTED_PRESSURE_PLATE: Item;
  readonly HOGLIN_SPAWN_EGG: Item;
  readonly HONEYCOMB: Item;
  readonly HONEYCOMB_BLOCK: Item;
  readonly HONEY_BLOCK: Item;
  readonly HONEY_BOTTLE: Item;
  readonly HOPPER: Item;
  readonly HOPPER_MINECART: Item;
  readonly HORN_CORAL: Item;
  readonly HORN_CORAL_BLOCK: Item;
  readonly HORN_CORAL_FAN: Item;
  readonly HORSE_SPAWN_EGG: Item;
  readonly HOST_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly HOWL_POTTERY_SHERD: Item;
  readonly HUSK_SPAWN_EGG: Item;
  readonly ICE: Item;
  readonly INFESTED_CHISELED_STONE_BRICKS: Item;
  readonly INFESTED_COBBLESTONE: Item;
  readonly INFESTED_CRACKED_STONE_BRICKS: Item;
  readonly INFESTED_DEEPSLATE: Item;
  readonly INFESTED_MOSSY_STONE_BRICKS: Item;
  readonly INFESTED_STONE: Item;
  readonly INFESTED_STONE_BRICKS: Item;
  readonly INK_SAC: Item;
  readonly IRON_AXE: Item;
  readonly IRON_BARS: Item;
  readonly IRON_BLOCK: Item;
  readonly IRON_BOOTS: Item;
  readonly IRON_CHESTPLATE: Item;
  readonly IRON_DOOR: Item;
  readonly IRON_GOLEM_SPAWN_EGG: Item;
  readonly IRON_HELMET: Item;
  readonly IRON_HOE: Item;
  readonly IRON_HORSE_ARMOR: Item;
  readonly IRON_INGOT: Item;
  readonly IRON_LEGGINGS: Item;
  readonly IRON_NUGGET: Item;
  readonly IRON_ORE: Item;
  readonly IRON_PICKAXE: Item;
  readonly IRON_SHOVEL: Item;
  readonly IRON_SWORD: Item;
  readonly IRON_TRAPDOOR: Item;
  readonly ITEM_FRAME: Item;
  readonly JACK_O_LANTERN: Item;
  readonly JIGSAW: Item;
  readonly JUKEBOX: Item;
  readonly JUNGLE_BOAT: Item;
  readonly JUNGLE_BUTTON: Item;
  readonly JUNGLE_CHEST_BOAT: Item;
  readonly JUNGLE_DOOR: Item;
  readonly JUNGLE_FENCE: Item;
  readonly JUNGLE_FENCE_GATE: Item;
  readonly JUNGLE_HANGING_SIGN: Item;
  readonly JUNGLE_LEAVES: Item;
  readonly JUNGLE_LOG: Item;
  readonly JUNGLE_PLANKS: Item;
  readonly JUNGLE_PRESSURE_PLATE: Item;
  readonly JUNGLE_SAPLING: Item;
  readonly JUNGLE_SIGN: Item;
  readonly JUNGLE_SLAB: Item;
  readonly JUNGLE_STAIRS: Item;
  readonly JUNGLE_TRAPDOOR: Item;
  readonly JUNGLE_WOOD: Item;
  readonly KELP: Item;
  readonly KNOWLEDGE_BOOK: Item;
  readonly LADDER: Item;
  readonly LANTERN: Item;
  readonly LAPIS_BLOCK: Item;
  readonly LAPIS_LAZULI: Item;
  readonly LAPIS_ORE: Item;
  readonly LARGE_AMETHYST_BUD: Item;
  readonly LARGE_FERN: Item;
  readonly LAVA_BUCKET: Item;
  readonly LEAD: Item;
  readonly LEAF_LITTER: Item;
  readonly LEATHER: Item;
  readonly LEATHER_BOOTS: Item;
  readonly LEATHER_CHESTPLATE: Item;
  readonly LEATHER_HELMET: Item;
  readonly LEATHER_HORSE_ARMOR: Item;
  readonly LEATHER_LEGGINGS: Item;
  readonly LECTERN: Item;
  readonly LEVER: Item;
  readonly LIGHT: Item;
  readonly LIGHTNING_ROD: Item;
  readonly LIGHT_BLUE_BANNER: Item;
  readonly LIGHT_BLUE_BED: Item;
  readonly LIGHT_BLUE_BUNDLE: Item;
  readonly LIGHT_BLUE_CANDLE: Item;
  readonly LIGHT_BLUE_CARPET: Item;
  readonly LIGHT_BLUE_CONCRETE: Item;
  readonly LIGHT_BLUE_CONCRETE_POWDER: Item;
  readonly LIGHT_BLUE_DYE: Item;
  readonly LIGHT_BLUE_GLAZED_TERRACOTTA: Item;
  readonly LIGHT_BLUE_HARNESS: Item;
  readonly LIGHT_BLUE_SHULKER_BOX: Item;
  readonly LIGHT_BLUE_STAINED_GLASS: Item;
  readonly LIGHT_BLUE_STAINED_GLASS_PANE: Item;
  readonly LIGHT_BLUE_TERRACOTTA: Item;
  readonly LIGHT_BLUE_WOOL: Item;
  readonly LIGHT_GRAY_BANNER: Item;
  readonly LIGHT_GRAY_BED: Item;
  readonly LIGHT_GRAY_BUNDLE: Item;
  readonly LIGHT_GRAY_CANDLE: Item;
  readonly LIGHT_GRAY_CARPET: Item;
  readonly LIGHT_GRAY_CONCRETE: Item;
  readonly LIGHT_GRAY_CONCRETE_POWDER: Item;
  readonly LIGHT_GRAY_DYE: Item;
  readonly LIGHT_GRAY_GLAZED_TERRACOTTA: Item;
  readonly LIGHT_GRAY_HARNESS: Item;
  readonly LIGHT_GRAY_SHULKER_BOX: Item;
  readonly LIGHT_GRAY_STAINED_GLASS: Item;
  readonly LIGHT_GRAY_STAINED_GLASS_PANE: Item;
  readonly LIGHT_GRAY_TERRACOTTA: Item;
  readonly LIGHT_GRAY_WOOL: Item;
  readonly LIGHT_WEIGHTED_PRESSURE_PLATE: Item;
  readonly LILAC: Item;
  readonly LILY_OF_THE_VALLEY: Item;
  readonly LILY_PAD: Item;
  readonly LIME_BANNER: Item;
  readonly LIME_BED: Item;
  readonly LIME_BUNDLE: Item;
  readonly LIME_CANDLE: Item;
  readonly LIME_CARPET: Item;
  readonly LIME_CONCRETE: Item;
  readonly LIME_CONCRETE_POWDER: Item;
  readonly LIME_DYE: Item;
  readonly LIME_GLAZED_TERRACOTTA: Item;
  readonly LIME_HARNESS: Item;
  readonly LIME_SHULKER_BOX: Item;
  readonly LIME_STAINED_GLASS: Item;
  readonly LIME_STAINED_GLASS_PANE: Item;
  readonly LIME_TERRACOTTA: Item;
  readonly LIME_WOOL: Item;
  readonly LINGERING_POTION: Item;
  readonly LLAMA_SPAWN_EGG: Item;
  readonly LODESTONE: Item;
  readonly LOOM: Item;
  readonly MACE: Item;
  readonly MAGENTA_BANNER: Item;
  readonly MAGENTA_BED: Item;
  readonly MAGENTA_BUNDLE: Item;
  readonly MAGENTA_CANDLE: Item;
  readonly MAGENTA_CARPET: Item;
  readonly MAGENTA_CONCRETE: Item;
  readonly MAGENTA_CONCRETE_POWDER: Item;
  readonly MAGENTA_DYE: Item;
  readonly MAGENTA_GLAZED_TERRACOTTA: Item;
  readonly MAGENTA_HARNESS: Item;
  readonly MAGENTA_SHULKER_BOX: Item;
  readonly MAGENTA_STAINED_GLASS: Item;
  readonly MAGENTA_STAINED_GLASS_PANE: Item;
  readonly MAGENTA_TERRACOTTA: Item;
  readonly MAGENTA_WOOL: Item;
  readonly MAGMA_BLOCK: Item;
  readonly MAGMA_CREAM: Item;
  readonly MAGMA_CUBE_SPAWN_EGG: Item;
  readonly MANGROVE_BOAT: Item;
  readonly MANGROVE_BUTTON: Item;
  readonly MANGROVE_CHEST_BOAT: Item;
  readonly MANGROVE_DOOR: Item;
  readonly MANGROVE_FENCE: Item;
  readonly MANGROVE_FENCE_GATE: Item;
  readonly MANGROVE_HANGING_SIGN: Item;
  readonly MANGROVE_LEAVES: Item;
  readonly MANGROVE_LOG: Item;
  readonly MANGROVE_PLANKS: Item;
  readonly MANGROVE_PRESSURE_PLATE: Item;
  readonly MANGROVE_PROPAGULE: Item;
  readonly MANGROVE_ROOTS: Item;
  readonly MANGROVE_SIGN: Item;
  readonly MANGROVE_SLAB: Item;
  readonly MANGROVE_STAIRS: Item;
  readonly MANGROVE_TRAPDOOR: Item;
  readonly MANGROVE_WOOD: Item;
  readonly MAP: Item;
  readonly MEDIUM_AMETHYST_BUD: Item;
  readonly MELON: Item;
  readonly MELON_SEEDS: Item;
  readonly MELON_SLICE: Item;
  readonly MILK_BUCKET: Item;
  readonly MINECART: Item;
  readonly MINER_POTTERY_SHERD: Item;
  readonly MOJANG_BANNER_PATTERN: Item;
  readonly MOOSHROOM_SPAWN_EGG: Item;
  readonly MOSSY_COBBLESTONE: Item;
  readonly MOSSY_COBBLESTONE_SLAB: Item;
  readonly MOSSY_COBBLESTONE_STAIRS: Item;
  readonly MOSSY_COBBLESTONE_WALL: Item;
  readonly MOSSY_STONE_BRICKS: Item;
  readonly MOSSY_STONE_BRICK_SLAB: Item;
  readonly MOSSY_STONE_BRICK_STAIRS: Item;
  readonly MOSSY_STONE_BRICK_WALL: Item;
  readonly MOSS_BLOCK: Item;
  readonly MOSS_CARPET: Item;
  readonly MOURNER_POTTERY_SHERD: Item;
  readonly MUD: Item;
  readonly MUDDY_MANGROVE_ROOTS: Item;
  readonly MUD_BRICKS: Item;
  readonly MUD_BRICK_SLAB: Item;
  readonly MUD_BRICK_STAIRS: Item;
  readonly MUD_BRICK_WALL: Item;
  readonly MULE_SPAWN_EGG: Item;
  readonly MUSHROOM_STEM: Item;
  readonly MUSHROOM_STEW: Item;
  readonly MUSIC_DISC_11: Item;
  readonly MUSIC_DISC_13: Item;
  readonly MUSIC_DISC_5: Item;
  readonly MUSIC_DISC_BLOCKS: Item;
  readonly MUSIC_DISC_CAT: Item;
  readonly MUSIC_DISC_CHIRP: Item;
  readonly MUSIC_DISC_CREATOR: Item;
  readonly MUSIC_DISC_CREATOR_MUSIC_BOX: Item;
  readonly MUSIC_DISC_FAR: Item;
  readonly MUSIC_DISC_LAVA_CHICKEN: Item;
  readonly MUSIC_DISC_MALL: Item;
  readonly MUSIC_DISC_MELLOHI: Item;
  readonly MUSIC_DISC_OTHERSIDE: Item;
  readonly MUSIC_DISC_PIGSTEP: Item;
  readonly MUSIC_DISC_PRECIPICE: Item;
  readonly MUSIC_DISC_RELIC: Item;
  readonly MUSIC_DISC_STAL: Item;
  readonly MUSIC_DISC_STRAD: Item;
  readonly MUSIC_DISC_TEARS: Item;
  readonly MUSIC_DISC_WAIT: Item;
  readonly MUSIC_DISC_WARD: Item;
  readonly MUTTON: Item;
  readonly MYCELIUM: Item;
  readonly NAME_TAG: Item;
  readonly NAUTILUS_SHELL: Item;
  readonly NETHERITE_AXE: Item;
  readonly NETHERITE_BLOCK: Item;
  readonly NETHERITE_BOOTS: Item;
  readonly NETHERITE_CHESTPLATE: Item;
  readonly NETHERITE_HELMET: Item;
  readonly NETHERITE_HOE: Item;
  readonly NETHERITE_INGOT: Item;
  readonly NETHERITE_LEGGINGS: Item;
  readonly NETHERITE_PICKAXE: Item;
  readonly NETHERITE_SCRAP: Item;
  readonly NETHERITE_SHOVEL: Item;
  readonly NETHERITE_SWORD: Item;
  readonly NETHERITE_UPGRADE_SMITHING_TEMPLATE: Item;
  readonly NETHERRACK: Item;
  readonly NETHER_BRICK: Item;
  readonly NETHER_BRICKS: Item;
  readonly NETHER_BRICK_FENCE: Item;
  readonly NETHER_BRICK_SLAB: Item;
  readonly NETHER_BRICK_STAIRS: Item;
  readonly NETHER_BRICK_WALL: Item;
  readonly NETHER_GOLD_ORE: Item;
  readonly NETHER_QUARTZ_ORE: Item;
  readonly NETHER_SPROUTS: Item;
  readonly NETHER_STAR: Item;
  readonly NETHER_WART: Item;
  readonly NETHER_WART_BLOCK: Item;
  readonly NOTE_BLOCK: Item;
  readonly OAK_BOAT: Item;
  readonly OAK_BUTTON: Item;
  readonly OAK_CHEST_BOAT: Item;
  readonly OAK_DOOR: Item;
  readonly OAK_FENCE: Item;
  readonly OAK_FENCE_GATE: Item;
  readonly OAK_HANGING_SIGN: Item;
  readonly OAK_LEAVES: Item;
  readonly OAK_LOG: Item;
  readonly OAK_PLANKS: Item;
  readonly OAK_PRESSURE_PLATE: Item;
  readonly OAK_SAPLING: Item;
  readonly OAK_SIGN: Item;
  readonly OAK_SLAB: Item;
  readonly OAK_STAIRS: Item;
  readonly OAK_TRAPDOOR: Item;
  readonly OAK_WOOD: Item;
  readonly OBSERVER: Item;
  readonly OBSIDIAN: Item;
  readonly OCELOT_SPAWN_EGG: Item;
  readonly OCHRE_FROGLIGHT: Item;
  readonly OMINOUS_BOTTLE: Item;
  readonly OMINOUS_TRIAL_KEY: Item;
  readonly OPEN_EYEBLOSSOM: Item;
  readonly ORANGE_BANNER: Item;
  readonly ORANGE_BED: Item;
  readonly ORANGE_BUNDLE: Item;
  readonly ORANGE_CANDLE: Item;
  readonly ORANGE_CARPET: Item;
  readonly ORANGE_CONCRETE: Item;
  readonly ORANGE_CONCRETE_POWDER: Item;
  readonly ORANGE_DYE: Item;
  readonly ORANGE_GLAZED_TERRACOTTA: Item;
  readonly ORANGE_HARNESS: Item;
  readonly ORANGE_SHULKER_BOX: Item;
  readonly ORANGE_STAINED_GLASS: Item;
  readonly ORANGE_STAINED_GLASS_PANE: Item;
  readonly ORANGE_TERRACOTTA: Item;
  readonly ORANGE_TULIP: Item;
  readonly ORANGE_WOOL: Item;
  readonly OXEYE_DAISY: Item;
  readonly OXIDIZED_CHISELED_COPPER: Item;
  readonly OXIDIZED_COPPER: Item;
  readonly OXIDIZED_COPPER_BULB: Item;
  readonly OXIDIZED_COPPER_DOOR: Item;
  readonly OXIDIZED_COPPER_GRATE: Item;
  readonly OXIDIZED_COPPER_TRAPDOOR: Item;
  readonly OXIDIZED_CUT_COPPER: Item;
  readonly OXIDIZED_CUT_COPPER_SLAB: Item;
  readonly OXIDIZED_CUT_COPPER_STAIRS: Item;
  readonly PACKED_ICE: Item;
  readonly PACKED_MUD: Item;
  readonly PAINTING: Item;
  readonly PALE_HANGING_MOSS: Item;
  readonly PALE_MOSS_BLOCK: Item;
  readonly PALE_MOSS_CARPET: Item;
  readonly PALE_OAK_BOAT: Item;
  readonly PALE_OAK_BUTTON: Item;
  readonly PALE_OAK_CHEST_BOAT: Item;
  readonly PALE_OAK_DOOR: Item;
  readonly PALE_OAK_FENCE: Item;
  readonly PALE_OAK_FENCE_GATE: Item;
  readonly PALE_OAK_HANGING_SIGN: Item;
  readonly PALE_OAK_LEAVES: Item;
  readonly PALE_OAK_LOG: Item;
  readonly PALE_OAK_PLANKS: Item;
  readonly PALE_OAK_PRESSURE_PLATE: Item;
  readonly PALE_OAK_SAPLING: Item;
  readonly PALE_OAK_SIGN: Item;
  readonly PALE_OAK_SLAB: Item;
  readonly PALE_OAK_STAIRS: Item;
  readonly PALE_OAK_TRAPDOOR: Item;
  readonly PALE_OAK_WOOD: Item;
  readonly PANDA_SPAWN_EGG: Item;
  readonly PAPER: Item;
  readonly PARROT_SPAWN_EGG: Item;
  readonly PEARLESCENT_FROGLIGHT: Item;
  readonly PEONY: Item;
  readonly PETRIFIED_OAK_SLAB: Item;
  readonly PHANTOM_MEMBRANE: Item;
  readonly PHANTOM_SPAWN_EGG: Item;
  readonly PIGLIN_BANNER_PATTERN: Item;
  readonly PIGLIN_BRUTE_SPAWN_EGG: Item;
  readonly PIGLIN_HEAD: Item;
  readonly PIGLIN_SPAWN_EGG: Item;
  readonly PIG_SPAWN_EGG: Item;
  readonly PILLAGER_SPAWN_EGG: Item;
  readonly PINK_BANNER: Item;
  readonly PINK_BED: Item;
  readonly PINK_BUNDLE: Item;
  readonly PINK_CANDLE: Item;
  readonly PINK_CARPET: Item;
  readonly PINK_CONCRETE: Item;
  readonly PINK_CONCRETE_POWDER: Item;
  readonly PINK_DYE: Item;
  readonly PINK_GLAZED_TERRACOTTA: Item;
  readonly PINK_HARNESS: Item;
  readonly PINK_PETALS: Item;
  readonly PINK_SHULKER_BOX: Item;
  readonly PINK_STAINED_GLASS: Item;
  readonly PINK_STAINED_GLASS_PANE: Item;
  readonly PINK_TERRACOTTA: Item;
  readonly PINK_TULIP: Item;
  readonly PINK_WOOL: Item;
  readonly PISTON: Item;
  readonly PITCHER_PLANT: Item;
  readonly PITCHER_POD: Item;
  readonly PLAYER_HEAD: Item;
  readonly PLENTY_POTTERY_SHERD: Item;
  readonly PODZOL: Item;
  readonly POINTED_DRIPSTONE: Item;
  readonly POISONOUS_POTATO: Item;
  readonly POLAR_BEAR_SPAWN_EGG: Item;
  readonly POLISHED_ANDESITE: Item;
  readonly POLISHED_ANDESITE_SLAB: Item;
  readonly POLISHED_ANDESITE_STAIRS: Item;
  readonly POLISHED_BASALT: Item;
  readonly POLISHED_BLACKSTONE: Item;
  readonly POLISHED_BLACKSTONE_BRICKS: Item;
  readonly POLISHED_BLACKSTONE_BRICK_SLAB: Item;
  readonly POLISHED_BLACKSTONE_BRICK_STAIRS: Item;
  readonly POLISHED_BLACKSTONE_BRICK_WALL: Item;
  readonly POLISHED_BLACKSTONE_BUTTON: Item;
  readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: Item;
  readonly POLISHED_BLACKSTONE_SLAB: Item;
  readonly POLISHED_BLACKSTONE_STAIRS: Item;
  readonly POLISHED_BLACKSTONE_WALL: Item;
  readonly POLISHED_DEEPSLATE: Item;
  readonly POLISHED_DEEPSLATE_SLAB: Item;
  readonly POLISHED_DEEPSLATE_STAIRS: Item;
  readonly POLISHED_DEEPSLATE_WALL: Item;
  readonly POLISHED_DIORITE: Item;
  readonly POLISHED_DIORITE_SLAB: Item;
  readonly POLISHED_DIORITE_STAIRS: Item;
  readonly POLISHED_GRANITE: Item;
  readonly POLISHED_GRANITE_SLAB: Item;
  readonly POLISHED_GRANITE_STAIRS: Item;
  readonly POLISHED_TUFF: Item;
  readonly POLISHED_TUFF_SLAB: Item;
  readonly POLISHED_TUFF_STAIRS: Item;
  readonly POLISHED_TUFF_WALL: Item;
  readonly POPPED_CHORUS_FRUIT: Item;
  readonly POPPY: Item;
  readonly PORKCHOP: Item;
  readonly POTATO: Item;
  readonly POTION: Item;
  readonly POWDER_SNOW_BUCKET: Item;
  readonly POWERED_RAIL: Item;
  readonly PRISMARINE: Item;
  readonly PRISMARINE_BRICKS: Item;
  readonly PRISMARINE_BRICK_SLAB: Item;
  readonly PRISMARINE_BRICK_STAIRS: Item;
  readonly PRISMARINE_CRYSTALS: Item;
  readonly PRISMARINE_SHARD: Item;
  readonly PRISMARINE_SLAB: Item;
  readonly PRISMARINE_STAIRS: Item;
  readonly PRISMARINE_WALL: Item;
  readonly PRIZE_POTTERY_SHERD: Item;
  readonly PUFFERFISH: Item;
  readonly PUFFERFISH_BUCKET: Item;
  readonly PUFFERFISH_SPAWN_EGG: Item;
  readonly PUMPKIN: Item;
  readonly PUMPKIN_PIE: Item;
  readonly PUMPKIN_SEEDS: Item;
  readonly PURPLE_BANNER: Item;
  readonly PURPLE_BED: Item;
  readonly PURPLE_BUNDLE: Item;
  readonly PURPLE_CANDLE: Item;
  readonly PURPLE_CARPET: Item;
  readonly PURPLE_CONCRETE: Item;
  readonly PURPLE_CONCRETE_POWDER: Item;
  readonly PURPLE_DYE: Item;
  readonly PURPLE_GLAZED_TERRACOTTA: Item;
  readonly PURPLE_HARNESS: Item;
  readonly PURPLE_SHULKER_BOX: Item;
  readonly PURPLE_STAINED_GLASS: Item;
  readonly PURPLE_STAINED_GLASS_PANE: Item;
  readonly PURPLE_TERRACOTTA: Item;
  readonly PURPLE_WOOL: Item;
  readonly PURPUR_BLOCK: Item;
  readonly PURPUR_PILLAR: Item;
  readonly PURPUR_SLAB: Item;
  readonly PURPUR_STAIRS: Item;
  readonly QUARTZ: Item;
  readonly QUARTZ_BLOCK: Item;
  readonly QUARTZ_BRICKS: Item;
  readonly QUARTZ_PILLAR: Item;
  readonly QUARTZ_SLAB: Item;
  readonly QUARTZ_STAIRS: Item;
  readonly RABBIT: Item;
  readonly RABBIT_FOOT: Item;
  readonly RABBIT_HIDE: Item;
  readonly RABBIT_SPAWN_EGG: Item;
  readonly RABBIT_STEW: Item;
  readonly RAIL: Item;
  readonly RAISER_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly RAVAGER_SPAWN_EGG: Item;
  readonly RAW_COPPER: Item;
  readonly RAW_COPPER_BLOCK: Item;
  readonly RAW_GOLD: Item;
  readonly RAW_GOLD_BLOCK: Item;
  readonly RAW_IRON: Item;
  readonly RAW_IRON_BLOCK: Item;
  readonly RECOVERY_COMPASS: Item;
  readonly REDSTONE: Item;
  readonly REDSTONE_BLOCK: Item;
  readonly REDSTONE_LAMP: Item;
  readonly REDSTONE_ORE: Item;
  readonly REDSTONE_TORCH: Item;
  readonly RED_BANNER: Item;
  readonly RED_BED: Item;
  readonly RED_BUNDLE: Item;
  readonly RED_CANDLE: Item;
  readonly RED_CARPET: Item;
  readonly RED_CONCRETE: Item;
  readonly RED_CONCRETE_POWDER: Item;
  readonly RED_DYE: Item;
  readonly RED_GLAZED_TERRACOTTA: Item;
  readonly RED_HARNESS: Item;
  readonly RED_MUSHROOM: Item;
  readonly RED_MUSHROOM_BLOCK: Item;
  readonly RED_NETHER_BRICKS: Item;
  readonly RED_NETHER_BRICK_SLAB: Item;
  readonly RED_NETHER_BRICK_STAIRS: Item;
  readonly RED_NETHER_BRICK_WALL: Item;
  readonly RED_SAND: Item;
  readonly RED_SANDSTONE: Item;
  readonly RED_SANDSTONE_SLAB: Item;
  readonly RED_SANDSTONE_STAIRS: Item;
  readonly RED_SANDSTONE_WALL: Item;
  readonly RED_SHULKER_BOX: Item;
  readonly RED_STAINED_GLASS: Item;
  readonly RED_STAINED_GLASS_PANE: Item;
  readonly RED_TERRACOTTA: Item;
  readonly RED_TULIP: Item;
  readonly RED_WOOL: Item;
  readonly REINFORCED_DEEPSLATE: Item;
  readonly REPEATER: Item;
  readonly REPEATING_COMMAND_BLOCK: Item;
  readonly RESIN_BLOCK: Item;
  readonly RESIN_BRICK: Item;
  readonly RESIN_BRICKS: Item;
  readonly RESIN_BRICK_SLAB: Item;
  readonly RESIN_BRICK_STAIRS: Item;
  readonly RESIN_BRICK_WALL: Item;
  readonly RESIN_CLUMP: Item;
  readonly RESPAWN_ANCHOR: Item;
  readonly RIB_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly ROOTED_DIRT: Item;
  readonly ROSE_BUSH: Item;
  readonly ROTTEN_FLESH: Item;
  readonly SADDLE: Item;
  readonly SALMON: Item;
  readonly SALMON_BUCKET: Item;
  readonly SALMON_SPAWN_EGG: Item;
  readonly SAND: Item;
  readonly SANDSTONE: Item;
  readonly SANDSTONE_SLAB: Item;
  readonly SANDSTONE_STAIRS: Item;
  readonly SANDSTONE_WALL: Item;
  readonly SCAFFOLDING: Item;
  readonly SCRAPE_POTTERY_SHERD: Item;
  readonly SCULK: Item;
  readonly SCULK_CATALYST: Item;
  readonly SCULK_SENSOR: Item;
  readonly SCULK_SHRIEKER: Item;
  readonly SCULK_VEIN: Item;
  readonly SEAGRASS: Item;
  readonly SEA_LANTERN: Item;
  readonly SEA_PICKLE: Item;
  readonly SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly SHEAF_POTTERY_SHERD: Item;
  readonly SHEARS: Item;
  readonly SHEEP_SPAWN_EGG: Item;
  readonly SHELTER_POTTERY_SHERD: Item;
  readonly SHIELD: Item;
  readonly SHORT_GRASS: Item;
  readonly SHROOMLIGHT: Item;
  readonly SHULKER_BOX: Item;
  readonly SHULKER_SHELL: Item;
  readonly SHULKER_SPAWN_EGG: Item;
  readonly SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly SILVERFISH_SPAWN_EGG: Item;
  readonly SKELETON_HORSE_SPAWN_EGG: Item;
  readonly SKELETON_SKULL: Item;
  readonly SKELETON_SPAWN_EGG: Item;
  readonly SKULL_BANNER_PATTERN: Item;
  readonly SKULL_POTTERY_SHERD: Item;
  readonly SLIME_BALL: Item;
  readonly SLIME_BLOCK: Item;
  readonly SLIME_SPAWN_EGG: Item;
  readonly SMALL_AMETHYST_BUD: Item;
  readonly SMALL_DRIPLEAF: Item;
  readonly SMITHING_TABLE: Item;
  readonly SMOKER: Item;
  readonly SMOOTH_BASALT: Item;
  readonly SMOOTH_QUARTZ: Item;
  readonly SMOOTH_QUARTZ_SLAB: Item;
  readonly SMOOTH_QUARTZ_STAIRS: Item;
  readonly SMOOTH_RED_SANDSTONE: Item;
  readonly SMOOTH_RED_SANDSTONE_SLAB: Item;
  readonly SMOOTH_RED_SANDSTONE_STAIRS: Item;
  readonly SMOOTH_SANDSTONE: Item;
  readonly SMOOTH_SANDSTONE_SLAB: Item;
  readonly SMOOTH_SANDSTONE_STAIRS: Item;
  readonly SMOOTH_STONE: Item;
  readonly SMOOTH_STONE_SLAB: Item;
  readonly SNIFFER_EGG: Item;
  readonly SNIFFER_SPAWN_EGG: Item;
  readonly SNORT_POTTERY_SHERD: Item;
  readonly SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly SNOW: Item;
  readonly SNOWBALL: Item;
  readonly SNOW_BLOCK: Item;
  readonly SNOW_GOLEM_SPAWN_EGG: Item;
  readonly SOUL_CAMPFIRE: Item;
  readonly SOUL_LANTERN: Item;
  readonly SOUL_SAND: Item;
  readonly SOUL_SOIL: Item;
  readonly SOUL_TORCH: Item;
  readonly SPAWNER: Item;
  readonly SPECTRAL_ARROW: Item;
  readonly SPIDER_EYE: Item;
  readonly SPIDER_SPAWN_EGG: Item;
  readonly SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly SPLASH_POTION: Item;
  readonly SPONGE: Item;
  readonly SPORE_BLOSSOM: Item;
  readonly SPRUCE_BOAT: Item;
  readonly SPRUCE_BUTTON: Item;
  readonly SPRUCE_CHEST_BOAT: Item;
  readonly SPRUCE_DOOR: Item;
  readonly SPRUCE_FENCE: Item;
  readonly SPRUCE_FENCE_GATE: Item;
  readonly SPRUCE_HANGING_SIGN: Item;
  readonly SPRUCE_LEAVES: Item;
  readonly SPRUCE_LOG: Item;
  readonly SPRUCE_PLANKS: Item;
  readonly SPRUCE_PRESSURE_PLATE: Item;
  readonly SPRUCE_SAPLING: Item;
  readonly SPRUCE_SIGN: Item;
  readonly SPRUCE_SLAB: Item;
  readonly SPRUCE_STAIRS: Item;
  readonly SPRUCE_TRAPDOOR: Item;
  readonly SPRUCE_WOOD: Item;
  readonly SPYGLASS: Item;
  readonly SQUID_SPAWN_EGG: Item;
  readonly STICK: Item;
  readonly STICKY_PISTON: Item;
  readonly STONE: Item;
  readonly STONECUTTER: Item;
  readonly STONE_AXE: Item;
  readonly STONE_BRICKS: Item;
  readonly STONE_BRICK_SLAB: Item;
  readonly STONE_BRICK_STAIRS: Item;
  readonly STONE_BRICK_WALL: Item;
  readonly STONE_BUTTON: Item;
  readonly STONE_HOE: Item;
  readonly STONE_PICKAXE: Item;
  readonly STONE_PRESSURE_PLATE: Item;
  readonly STONE_SHOVEL: Item;
  readonly STONE_SLAB: Item;
  readonly STONE_STAIRS: Item;
  readonly STONE_SWORD: Item;
  readonly STRAY_SPAWN_EGG: Item;
  readonly STRIDER_SPAWN_EGG: Item;
  readonly STRING: Item;
  readonly STRIPPED_ACACIA_LOG: Item;
  readonly STRIPPED_ACACIA_WOOD: Item;
  readonly STRIPPED_BAMBOO_BLOCK: Item;
  readonly STRIPPED_BIRCH_LOG: Item;
  readonly STRIPPED_BIRCH_WOOD: Item;
  readonly STRIPPED_CHERRY_LOG: Item;
  readonly STRIPPED_CHERRY_WOOD: Item;
  readonly STRIPPED_CRIMSON_HYPHAE: Item;
  readonly STRIPPED_CRIMSON_STEM: Item;
  readonly STRIPPED_DARK_OAK_LOG: Item;
  readonly STRIPPED_DARK_OAK_WOOD: Item;
  readonly STRIPPED_JUNGLE_LOG: Item;
  readonly STRIPPED_JUNGLE_WOOD: Item;
  readonly STRIPPED_MANGROVE_LOG: Item;
  readonly STRIPPED_MANGROVE_WOOD: Item;
  readonly STRIPPED_OAK_LOG: Item;
  readonly STRIPPED_OAK_WOOD: Item;
  readonly STRIPPED_PALE_OAK_LOG: Item;
  readonly STRIPPED_PALE_OAK_WOOD: Item;
  readonly STRIPPED_SPRUCE_LOG: Item;
  readonly STRIPPED_SPRUCE_WOOD: Item;
  readonly STRIPPED_WARPED_HYPHAE: Item;
  readonly STRIPPED_WARPED_STEM: Item;
  readonly STRUCTURE_BLOCK: Item;
  readonly STRUCTURE_VOID: Item;
  readonly SUGAR: Item;
  readonly SUGAR_CANE: Item;
  readonly SUNFLOWER: Item;
  readonly SUSPICIOUS_GRAVEL: Item;
  readonly SUSPICIOUS_SAND: Item;
  readonly SUSPICIOUS_STEW: Item;
  readonly SWEET_BERRIES: Item;
  readonly TADPOLE_BUCKET: Item;
  readonly TADPOLE_SPAWN_EGG: Item;
  readonly TALL_GRASS: Item;
  readonly TARGET: Item;
  readonly TERRACOTTA: Item;
  readonly TEST_BLOCK: Item;
  readonly TEST_INSTANCE_BLOCK: Item;
  readonly TIDE_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly TINTED_GLASS: Item;
  readonly TIPPED_ARROW: Item;
  readonly TNT: Item;
  readonly TNT_MINECART: Item;
  readonly TORCH: Item;
  readonly TORCHFLOWER: Item;
  readonly TORCHFLOWER_SEEDS: Item;
  readonly TOTEM_OF_UNDYING: Item;
  readonly TRADER_LLAMA_SPAWN_EGG: Item;
  readonly TRAPPED_CHEST: Item;
  readonly TRIAL_KEY: Item;
  readonly TRIAL_SPAWNER: Item;
  readonly TRIDENT: Item;
  readonly TRIPWIRE_HOOK: Item;
  readonly TROPICAL_FISH: Item;
  readonly TROPICAL_FISH_BUCKET: Item;
  readonly TROPICAL_FISH_SPAWN_EGG: Item;
  readonly TUBE_CORAL: Item;
  readonly TUBE_CORAL_BLOCK: Item;
  readonly TUBE_CORAL_FAN: Item;
  readonly TUFF: Item;
  readonly TUFF_BRICKS: Item;
  readonly TUFF_BRICK_SLAB: Item;
  readonly TUFF_BRICK_STAIRS: Item;
  readonly TUFF_BRICK_WALL: Item;
  readonly TUFF_SLAB: Item;
  readonly TUFF_STAIRS: Item;
  readonly TUFF_WALL: Item;
  readonly TURTLE_EGG: Item;
  readonly TURTLE_HELMET: Item;
  readonly TURTLE_SCUTE: Item;
  readonly TURTLE_SPAWN_EGG: Item;
  readonly TWISTING_VINES: Item;
  readonly VAULT: Item;
  readonly VERDANT_FROGLIGHT: Item;
  readonly VEX_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly VEX_SPAWN_EGG: Item;
  readonly VILLAGER_SPAWN_EGG: Item;
  readonly VINDICATOR_SPAWN_EGG: Item;
  readonly VINE: Item;
  readonly WANDERING_TRADER_SPAWN_EGG: Item;
  readonly WARDEN_SPAWN_EGG: Item;
  readonly WARD_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly WARPED_BUTTON: Item;
  readonly WARPED_DOOR: Item;
  readonly WARPED_FENCE: Item;
  readonly WARPED_FENCE_GATE: Item;
  readonly WARPED_FUNGUS: Item;
  readonly WARPED_FUNGUS_ON_A_STICK: Item;
  readonly WARPED_HANGING_SIGN: Item;
  readonly WARPED_HYPHAE: Item;
  readonly WARPED_NYLIUM: Item;
  readonly WARPED_PLANKS: Item;
  readonly WARPED_PRESSURE_PLATE: Item;
  readonly WARPED_ROOTS: Item;
  readonly WARPED_SIGN: Item;
  readonly WARPED_SLAB: Item;
  readonly WARPED_STAIRS: Item;
  readonly WARPED_STEM: Item;
  readonly WARPED_TRAPDOOR: Item;
  readonly WARPED_WART_BLOCK: Item;
  readonly WATER_BUCKET: Item;
  readonly WAXED_CHISELED_COPPER: Item;
  readonly WAXED_COPPER_BLOCK: Item;
  readonly WAXED_COPPER_BULB: Item;
  readonly WAXED_COPPER_DOOR: Item;
  readonly WAXED_COPPER_GRATE: Item;
  readonly WAXED_COPPER_TRAPDOOR: Item;
  readonly WAXED_CUT_COPPER: Item;
  readonly WAXED_CUT_COPPER_SLAB: Item;
  readonly WAXED_CUT_COPPER_STAIRS: Item;
  readonly WAXED_EXPOSED_CHISELED_COPPER: Item;
  readonly WAXED_EXPOSED_COPPER: Item;
  readonly WAXED_EXPOSED_COPPER_BULB: Item;
  readonly WAXED_EXPOSED_COPPER_DOOR: Item;
  readonly WAXED_EXPOSED_COPPER_GRATE: Item;
  readonly WAXED_EXPOSED_COPPER_TRAPDOOR: Item;
  readonly WAXED_EXPOSED_CUT_COPPER: Item;
  readonly WAXED_EXPOSED_CUT_COPPER_SLAB: Item;
  readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: Item;
  readonly WAXED_OXIDIZED_CHISELED_COPPER: Item;
  readonly WAXED_OXIDIZED_COPPER: Item;
  readonly WAXED_OXIDIZED_COPPER_BULB: Item;
  readonly WAXED_OXIDIZED_COPPER_DOOR: Item;
  readonly WAXED_OXIDIZED_COPPER_GRATE: Item;
  readonly WAXED_OXIDIZED_COPPER_TRAPDOOR: Item;
  readonly WAXED_OXIDIZED_CUT_COPPER: Item;
  readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: Item;
  readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: Item;
  readonly WAXED_WEATHERED_CHISELED_COPPER: Item;
  readonly WAXED_WEATHERED_COPPER: Item;
  readonly WAXED_WEATHERED_COPPER_BULB: Item;
  readonly WAXED_WEATHERED_COPPER_DOOR: Item;
  readonly WAXED_WEATHERED_COPPER_GRATE: Item;
  readonly WAXED_WEATHERED_COPPER_TRAPDOOR: Item;
  readonly WAXED_WEATHERED_CUT_COPPER: Item;
  readonly WAXED_WEATHERED_CUT_COPPER_SLAB: Item;
  readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: Item;
  readonly WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly WEATHERED_CHISELED_COPPER: Item;
  readonly WEATHERED_COPPER: Item;
  readonly WEATHERED_COPPER_BULB: Item;
  readonly WEATHERED_COPPER_DOOR: Item;
  readonly WEATHERED_COPPER_GRATE: Item;
  readonly WEATHERED_COPPER_TRAPDOOR: Item;
  readonly WEATHERED_CUT_COPPER: Item;
  readonly WEATHERED_CUT_COPPER_SLAB: Item;
  readonly WEATHERED_CUT_COPPER_STAIRS: Item;
  readonly WEEPING_VINES: Item;
  readonly WET_SPONGE: Item;
  readonly WHEAT: Item;
  readonly WHEAT_SEEDS: Item;
  readonly WHITE_BANNER: Item;
  readonly WHITE_BED: Item;
  readonly WHITE_BUNDLE: Item;
  readonly WHITE_CANDLE: Item;
  readonly WHITE_CARPET: Item;
  readonly WHITE_CONCRETE: Item;
  readonly WHITE_CONCRETE_POWDER: Item;
  readonly WHITE_DYE: Item;
  readonly WHITE_GLAZED_TERRACOTTA: Item;
  readonly WHITE_HARNESS: Item;
  readonly WHITE_SHULKER_BOX: Item;
  readonly WHITE_STAINED_GLASS: Item;
  readonly WHITE_STAINED_GLASS_PANE: Item;
  readonly WHITE_TERRACOTTA: Item;
  readonly WHITE_TULIP: Item;
  readonly WHITE_WOOL: Item;
  readonly WILDFLOWERS: Item;
  readonly WILD_ARMOR_TRIM_SMITHING_TEMPLATE: Item;
  readonly WIND_CHARGE: Item;
  readonly WITCH_SPAWN_EGG: Item;
  readonly WITHER_ROSE: Item;
  readonly WITHER_SKELETON_SKULL: Item;
  readonly WITHER_SKELETON_SPAWN_EGG: Item;
  readonly WITHER_SPAWN_EGG: Item;
  readonly WOLF_ARMOR: Item;
  readonly WOLF_SPAWN_EGG: Item;
  readonly WOODEN_AXE: Item;
  readonly WOODEN_HOE: Item;
  readonly WOODEN_PICKAXE: Item;
  readonly WOODEN_SHOVEL: Item;
  readonly WOODEN_SWORD: Item;
  readonly WRITABLE_BOOK: Item;
  readonly WRITTEN_BOOK: Item;
  readonly YELLOW_BANNER: Item;
  readonly YELLOW_BED: Item;
  readonly YELLOW_BUNDLE: Item;
  readonly YELLOW_CANDLE: Item;
  readonly YELLOW_CARPET: Item;
  readonly YELLOW_CONCRETE: Item;
  readonly YELLOW_CONCRETE_POWDER: Item;
  readonly YELLOW_DYE: Item;
  readonly YELLOW_GLAZED_TERRACOTTA: Item;
  readonly YELLOW_HARNESS: Item;
  readonly YELLOW_SHULKER_BOX: Item;
  readonly YELLOW_STAINED_GLASS: Item;
  readonly YELLOW_STAINED_GLASS_PANE: Item;
  readonly YELLOW_TERRACOTTA: Item;
  readonly YELLOW_WOOL: Item;
  readonly ZOGLIN_SPAWN_EGG: Item;
  readonly ZOMBIE_HEAD: Item;
  readonly ZOMBIE_HORSE_SPAWN_EGG: Item;
  readonly ZOMBIE_SPAWN_EGG: Item;
  readonly ZOMBIE_VILLAGER_SPAWN_EGG: Item;
  readonly ZOMBIFIED_PIGLIN_SPAWN_EGG: Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block): Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block, arg1: JavaBiFunction<j_net_minecraft_world_level_block.Block, Item_Properties, Item>): Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block, arg1: JavaBiFunction<j_net_minecraft_world_level_block.Block, Item_Properties, Item>, arg2: Item_Properties): Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block, arg1: JavaOpaque<"java.util.function.UnaryOperator", [Item_Properties]>): Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): Item;
  registerBlock(arg0: j_net_minecraft_world_level_block.Block, ...arg1: Array<j_net_minecraft_world_level_block.Block>): Item;
  registerItem(arg0: string): Item;
  registerItem(arg0: string, arg1: JavaFunction<Item_Properties, Item>): Item;
  registerItem(arg0: string, arg1: JavaFunction<Item_Properties, Item>, arg2: Item_Properties): Item;
  registerItem(arg0: string, arg1: Item_Properties): Item;
  registerItem(arg0: j_net_minecraft_resources.ResourceKey<Item>, arg1: JavaFunction<Item_Properties, Item>): Item;
  registerItem(arg0: j_net_minecraft_resources.ResourceKey<Item>, arg1: JavaFunction<Item_Properties, Item>, arg2: Item_Properties): Item;
}

/** JVM class net.minecraft.world.item.ItemStack. */
export interface ItemStackMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_core_component.DataComponentHolder];
  addDetailsToTooltip(arg0: Item_TooltipContext, arg1: j_net_minecraft_world_item_component.TooltipDisplay, arg2: j_net_minecraft_world_entity_player.Player | null, arg3: TooltipFlag, arg4: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  addToTooltip<T /* extends j_net_minecraft_world_item_component.TooltipProvider */>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: Item_TooltipContext, arg2: j_net_minecraft_world_item_component.TooltipDisplay, arg3: JavaConsumer<j_net_minecraft_network_chat.Component>, arg4: TooltipFlag): void;
  applyComponents(arg0: j_net_minecraft_core_component.DataComponentMap): void;
  applyComponents(arg0: j_net_minecraft_core_component.DataComponentPatch): void;
  applyComponentsAndValidate(arg0: j_net_minecraft_core_component.DataComponentPatch): void;
  asBukkitCopy(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  asBukkitMirror(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  canBeHurtBy(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  canBreakBlockInAdventureMode(arg0: j_net_minecraft_world_level_block_state_pattern.BlockInWorld): boolean;
  canDestroyBlock(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player): boolean;
  canPlaceOnBlockInAdventureMode(arg0: j_net_minecraft_world_level_block_state_pattern.BlockInWorld): boolean;
  consume(arg0: number, arg1: j_net_minecraft_world_entity.LivingEntity | null): void;
  consumeAndReturn(arg0: number, arg1: j_net_minecraft_world_entity.LivingEntity | null): ItemStack;
  copy(): ItemStack;
  copy(arg0: boolean): ItemStack;
  copyAndClear(): ItemStack;
  copyFrom<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: j_net_minecraft_core_component.DataComponentGetter): void;
  copyWithCount(arg0: number): ItemStack;
  enchant(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_enchantment.Enchantment>, arg1: number): void;
  finishUsingItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity): ItemStack;
  forEachModifier(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  forEachModifier(arg0: j_net_minecraft_world_entity.EquipmentSlotGroup, arg1: JavaOpaque<"org.apache.commons.lang3.function.TriConsumer", [j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier, j_net_minecraft_world_item_component.ItemAttributeModifiers_Display]>): void;
  getBarColor(): number;
  getBarWidth(): number;
  getBukkitStack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  getComponents(): j_net_minecraft_core_component.DataComponentMap;
  getComponentsPatch(): j_net_minecraft_core_component.DataComponentPatch;
  getCount(): number;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getDamageValue(): number;
  getDestroySpeed(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getEnchantments(): j_net_minecraft_world_item_enchantment.ItemEnchantments;
  getEntityRepresentation(): j_net_minecraft_world_entity.Entity | null;
  getFrame(): j_net_minecraft_world_entity_decoration.ItemFrame | null;
  getHoverName(): j_net_minecraft_network_chat.Component;
  getItem(): Item;
  getItemHolder(): j_net_minecraft_core.Holder<Item>;
  getItemName(): j_net_minecraft_network_chat.Component;
  getMaxDamage(): number;
  getMaxStackSize(): number;
  getPopTime(): number;
  getPrototype(): j_net_minecraft_core_component.DataComponentMap;
  getRarity(): Rarity;
  getStyledHoverName(): j_net_minecraft_network_chat.Component;
  getTags(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_tags.TagKey<Item>]>;
  getTooltipImage(): JavaOptional<j_net_minecraft_world_inventory_tooltip.TooltipComponent>;
  getTooltipLines(arg0: Item_TooltipContext, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: TooltipFlag): JavaList<j_net_minecraft_network_chat.Component>;
  getUseAnimation(): ItemUseAnimation;
  getUseDuration(arg0: j_net_minecraft_world_entity.LivingEntity): number;
  grow(arg0: number): void;
  hasFoil(): boolean;
  hasNonDefault(arg0: j_net_minecraft_core_component.DataComponentType<object>): boolean;
  hurtAndBreak(arg0: number, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: JavaConsumer<Item>): void;
  hurtAndBreak(arg0: number, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.LivingEntity | null, arg3: JavaConsumer<Item>, arg4: boolean): void;
  hurtAndBreak(arg0: number, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world.InteractionHand): void;
  hurtAndBreak(arg0: number, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.EquipmentSlot): void;
  hurtAndBreak(arg0: number, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.EquipmentSlot, arg3: boolean): void;
  hurtAndConvertOnBreak(arg0: number, arg1: j_net_minecraft_world_level.ItemLike, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world_entity.EquipmentSlot): ItemStack;
  hurtEnemy(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  hurtWithoutBreaking(arg0: number, arg1: j_net_minecraft_world_entity_player.Player): void;
  immutableComponents(): j_net_minecraft_core_component.DataComponentMap;
  interactLivingEntity(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  inventoryTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_entity.EquipmentSlot | null): void;
  is(arg0: JavaPredicate<j_net_minecraft_core.Holder<Item>>): boolean;
  is(arg0: j_net_minecraft_core.Holder<Item>): boolean;
  is(arg0: j_net_minecraft_core.HolderSet<Item>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<Item>): boolean;
  is(arg0: Item): boolean;
  isBarVisible(): boolean;
  isBroken(): boolean;
  isCorrectToolForDrops(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isDamageableItem(): boolean;
  isDamaged(): boolean;
  isEmpty(): boolean;
  isEnchantable(): boolean;
  isEnchanted(): boolean;
  isFramed(): boolean;
  isItemEnabled(arg0: j_net_minecraft_world_flag.FeatureFlagSet): boolean;
  isStackable(): boolean;
  isValidRepairItem(arg0: ItemStack): boolean;
  limitSize(arg0: number): void;
  mineBlock(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_state.BlockState, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_entity_player.Player): void;
  nextDamageWillBreak(): boolean;
  onCraftedBy(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): void;
  onCraftedBySystem(arg0: j_net_minecraft_world_level.Level): void;
  onDestroyed(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  onUseTick(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): void;
  overrideOtherStackedOnMe(arg0: ItemStack, arg1: j_net_minecraft_world_inventory.Slot, arg2: j_net_minecraft_world_inventory.ClickAction, arg3: j_net_minecraft_world_entity_player.Player, arg4: j_net_minecraft_world_entity.SlotAccess): boolean;
  overrideStackedOnOther(arg0: j_net_minecraft_world_inventory.Slot, arg1: j_net_minecraft_world_inventory.ClickAction, arg2: j_net_minecraft_world_entity_player.Player): boolean;
  postHurtEnemy(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  releaseUsing(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number): void;
  remove<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  restorePatch(arg0: j_net_minecraft_core_component.DataComponentPatch): void;
  set<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T | null): T | null;
  setCount(arg0: number): void;
  setDamageValue(arg0: number): void;
  setEntityRepresentation(arg0: j_net_minecraft_world_entity.Entity | null): void;
  setItem(arg0: Item): void;
  setPopTime(arg0: number): void;
  shrink(arg0: number): void;
  split(arg0: number): ItemStack;
  toString(): string;
  transmuteCopy(arg0: j_net_minecraft_world_level.ItemLike): ItemStack;
  transmuteCopy(arg0: j_net_minecraft_world_level.ItemLike, arg1: number): ItemStack;
  update<T, U>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T, arg2: U, arg3: JavaBiFunction<T, U, T>): T | null;
  update<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T, arg2: JavaOpaque<"java.util.function.UnaryOperator", [T]>): T | null;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
  useOnRelease(): boolean;
}
export type ItemStack = ItemStackMembers & j_net_minecraft_core_component.DataComponentHolder;
export interface ItemStackStatics {
  new(arg0: j_net_minecraft_core.Holder<Item>): ItemStack;
  new(arg0: j_net_minecraft_core.Holder<Item>, arg1: number): ItemStack;
  new(arg0: j_net_minecraft_core.Holder<Item>, arg1: number, arg2: j_net_minecraft_core_component.DataComponentPatch): ItemStack;
  new(arg0: j_net_minecraft_world_level.ItemLike): ItemStack;
  new(arg0: j_net_minecraft_world_level.ItemLike, arg1: number): ItemStack;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  readonly EMPTY: ItemStack;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ItemStack]>;
  readonly OPTIONAL_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  readonly OPTIONAL_LIST_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaList<ItemStack>>;
  readonly OPTIONAL_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemStack>;
  readonly OPTIONAL_UNTRUSTED_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemStack>;
  readonly SIMPLE_ITEM_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  readonly SINGLE_ITEM_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemStack>;
  readonly STRICT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  readonly STRICT_SINGLE_ITEM_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStack]>;
  fromBukkitCopy(arg0: JavaOpaque<"org.bukkit.inventory.ItemStack">): ItemStack;
  hashItemAndComponents(arg0: ItemStack | null): number;
  hashStackList(arg0: JavaList<ItemStack>): number;
  isSameItem(arg0: ItemStack, arg1: ItemStack): boolean;
  isSameItemSameComponents(arg0: ItemStack, arg1: ItemStack): boolean;
  lenientOptionalFieldOf(arg0: string): JavaOpaque<"com.mojang.serialization.MapCodec", [ItemStack]>;
  listMatches(arg0: JavaList<ItemStack>, arg1: JavaList<ItemStack>): boolean;
  matches(arg0: ItemStack, arg1: ItemStack): boolean;
  validateComponents(arg0: j_net_minecraft_core_component.DataComponentMap): JavaOpaque<"com.mojang.serialization.DataResult", [j_net_minecraft_util.Unit]>;
  validateStrict(arg0: ItemStack): JavaOpaque<"com.mojang.serialization.DataResult", [ItemStack]>;
  validatedStreamCodec(arg0: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemStack>): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemStack>;
}

/** JVM class net.minecraft.world.item.ItemStackLinkedSet. */
export interface ItemStackLinkedSetMembers {
}
export type ItemStackLinkedSet = ItemStackLinkedSetMembers;
export interface ItemStackLinkedSetStatics {
  new(): ItemStackLinkedSet;
  readonly TYPE_AND_TAG: JavaOpaque<"it.unimi.dsi.fastutil.Hash$Strategy", [ItemStack]>;
  createTypeAndComponentsSet(): JavaSet<ItemStack>;
}

/** Live JVM enum net.minecraft.world.item.ItemUseAnimation; constants are host handles, not strings. */
export type ItemUseAnimation = JavaEnum<"net.minecraft.world.item.ItemUseAnimation", "BLOCK" | "BOW" | "BRUSH" | "BUNDLE" | "CROSSBOW" | "DRINK" | "EAT" | "NONE" | "SPEAR" | "SPYGLASS" | "TOOT_HORN"> & ItemUseAnimationMembers;
export interface ItemUseAnimationMembers {
  getId(): number;
  getSerializedName(): string;
}
export interface ItemUseAnimationStatics {
  readonly BLOCK: ItemUseAnimation;
  readonly BOW: ItemUseAnimation;
  readonly BRUSH: ItemUseAnimation;
  readonly BUNDLE: ItemUseAnimation;
  readonly CROSSBOW: ItemUseAnimation;
  readonly DRINK: ItemUseAnimation;
  readonly EAT: ItemUseAnimation;
  readonly NONE: ItemUseAnimation;
  readonly SPEAR: ItemUseAnimation;
  readonly SPYGLASS: ItemUseAnimation;
  readonly TOOT_HORN: ItemUseAnimation;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemUseAnimation]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ItemUseAnimation>;
  valueOf(arg0: string): ItemUseAnimation;
  values(): Array<ItemUseAnimation>;
}

/** JVM class net.minecraft.world.item.ItemUtils. */
export interface ItemUtilsMembers {
}
export type ItemUtils = ItemUtilsMembers;
export interface ItemUtilsStatics {
  new(): ItemUtils;
  createFilledResult(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player, arg2: ItemStack): ItemStack;
  createFilledResult(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player, arg2: ItemStack, arg3: boolean): ItemStack;
  onContainerDestroyed(arg0: j_net_minecraft_world_entity_item.ItemEntity, arg1: Iterable<ItemStack>): void;
  startUsingInstantly(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}

/** JVM record net.minecraft.world.item.JukeboxPlayable. */
export interface JukeboxPlayableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  song(): EitherHolder<JukeboxSong>;
  toString(): string;
}
export type JukeboxPlayable = JukeboxPlayableMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.TooltipProvider;
export interface JukeboxPlayableStatics {
  new(arg0: EitherHolder<JukeboxSong>): JukeboxPlayable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JukeboxPlayable]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JukeboxPlayable>;
  tryInsertIntoJukebox(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: ItemStack, arg3: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world.InteractionResult;
}

/** JVM record net.minecraft.world.item.JukeboxSong. */
export interface JukeboxSongMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  comparatorOutput(): number;
  description(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hasFinished(arg0: bigint): boolean;
  hashCode(): number;
  lengthInSeconds(): number;
  lengthInTicks(): number;
  soundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  toString(): string;
}
export type JukeboxSong = JukeboxSongMembers & JavaOpaque<"java.lang.Record">;
export interface JukeboxSongStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg1: j_net_minecraft_network_chat.Component, arg2: number, arg3: number): JukeboxSong;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<JukeboxSong>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JukeboxSong]>;
  readonly DIRECT_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JukeboxSong>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<JukeboxSong>>;
  fromStack(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: ItemStack): JavaOptional<j_net_minecraft_core.Holder<JukeboxSong>>;
}

/** JVM class net.minecraft.world.item.JukeboxSongPlayer. */
export interface JukeboxSongPlayerMembers {
  getSong(): JukeboxSong | null;
  getTicksSinceSongStarted(): bigint;
  isPlaying(): boolean;
  play(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.Holder<JukeboxSong>): void;
  setSongWithoutPlaying(arg0: j_net_minecraft_core.Holder<JukeboxSong>, arg1: bigint): void;
  song: j_net_minecraft_core.Holder<JukeboxSong> | null;
  stop(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState | null): void;
  tick(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_world_level_block_state.BlockState | null): void;
}
export type JukeboxSongPlayer = JukeboxSongPlayerMembers;
export interface JukeboxSongPlayerStatics {
  new(arg0: JukeboxSongPlayer_OnSongChanged, arg1: j_net_minecraft_core.BlockPos): JukeboxSongPlayer;
  readonly PLAY_EVENT_INTERVAL_TICKS: 20;
}

/** JVM interface net.minecraft.world.item.JukeboxSongPlayer$OnSongChanged. */
export interface JukeboxSongPlayer_OnSongChangedMembers {
  notifyChange(): void;
}
export type JukeboxSongPlayer_OnSongChanged = JukeboxSongPlayer_OnSongChangedMembers;
export interface JukeboxSongPlayer_OnSongChangedStatics {
}

/** JVM interface net.minecraft.world.item.JukeboxSongs. */
export interface JukeboxSongsMembers {
}
export type JukeboxSongs = JukeboxSongsMembers;
export interface JukeboxSongsStatics {
  readonly BLOCKS: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly CAT: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly CHIRP: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly CREATOR: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly CREATOR_MUSIC_BOX: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly ELEVEN: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly FAR: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly FIVE: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly LAVA_CHICKEN: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly MALL: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly MELLOHI: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly OTHERSIDE: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly PIGSTEP: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly PRECIPICE: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly RELIC: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly STAL: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly STRAD: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly TEARS: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly THIRTEEN: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly WAIT: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  readonly WARD: j_net_minecraft_resources.ResourceKey<JukeboxSong>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<JukeboxSong>): void;
}

/** JVM class net.minecraft.world.item.KnowledgeBookItem. */
export interface KnowledgeBookItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type KnowledgeBookItem = KnowledgeBookItemMembers & Item;
export interface KnowledgeBookItemStatics {
  new(arg0: Item_Properties): KnowledgeBookItem;
}

/** JVM class net.minecraft.world.item.LeadItem. */
export interface LeadItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type LeadItem = LeadItemMembers & Item;
export interface LeadItemStatics {
  new(arg0: Item_Properties): LeadItem;
  bindPlayerMobs(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): j_net_minecraft_world.InteractionResult;
  bindPlayerMobs(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}

/** JVM class net.minecraft.world.item.LingeringPotionItem. */
export interface LingeringPotionItemMembers {
  readonly __javaSupertypes?: readonly [ThrowablePotionItem];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type LingeringPotionItem = LingeringPotionItemMembers & ThrowablePotionItem;
export interface LingeringPotionItemStatics {
  new(arg0: Item_Properties): LingeringPotionItem;
}

/** JVM class net.minecraft.world.item.MaceItem. */
export interface MaceItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getAttackDamageBonus(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): number;
  getDamageSource(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_damagesource.DamageSource | null;
  hurtEnemy(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): void;
  postHurtEnemy(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_entity.LivingEntity): void;
}
export type MaceItem = MaceItemMembers & Item;
export interface MaceItemStatics {
  new(arg0: Item_Properties): MaceItem;
  readonly SMASH_ATTACK_FALL_THRESHOLD: 1.5;
  readonly SMASH_ATTACK_KNOCKBACK_RADIUS: 3.5;
  canSmashAttack(arg0: j_net_minecraft_world_entity.LivingEntity): boolean;
  createAttributes(): j_net_minecraft_world_item_component.ItemAttributeModifiers;
  createToolProperties(): j_net_minecraft_world_item_component.Tool;
}

/** JVM class net.minecraft.world.item.MapItem. */
export interface MapItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  inventoryTick(arg0: ItemStack, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_entity.Entity, arg3: j_net_minecraft_world_entity.EquipmentSlot | null): void;
  onCraftedPostProcess(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level): void;
  update(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData): void;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type MapItem = MapItemMembers & Item;
export interface MapItemStatics {
  new(arg0: Item_Properties): MapItem;
  readonly IMAGE_HEIGHT: 128;
  readonly IMAGE_WIDTH: 128;
  create(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): ItemStack;
  createNewSavedData(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): j_net_minecraft_world_level_saveddata_maps.MapId;
  getSavedData(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level): j_net_minecraft_world_level_saveddata_maps.MapItemSavedData | null;
  getSavedData(arg0: j_net_minecraft_world_level_saveddata_maps.MapId | null, arg1: j_net_minecraft_world_level.Level): j_net_minecraft_world_level_saveddata_maps.MapItemSavedData | null;
  renderBiomePreviewMap(arg0: j_net_minecraft_server_level.ServerLevel, arg1: ItemStack): void;
}

/** JVM class net.minecraft.world.item.MinecartItem. */
export interface MinecartItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type MinecartItem = MinecartItemMembers & Item;
export interface MinecartItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity_vehicle.AbstractMinecart>, arg1: Item_Properties): MinecartItem;
}

/** JVM class net.minecraft.world.item.MobBucketItem. */
export interface MobBucketItemMembers {
  readonly __javaSupertypes?: readonly [BucketItem];
  checkExtraContent(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: ItemStack, arg3: j_net_minecraft_core.BlockPos): void;
}
export type MobBucketItem = MobBucketItemMembers & BucketItem;
export interface MobBucketItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity.Mob>, arg1: j_net_minecraft_world_level_material.Fluid, arg2: j_net_minecraft_sounds.SoundEvent, arg3: Item_Properties): MobBucketItem;
}

/** JVM class net.minecraft.world.item.NameTagItem. */
export interface NameTagItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  interactLivingEntity(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type NameTagItem = NameTagItemMembers & Item;
export interface NameTagItemStatics {
  new(arg0: Item_Properties): NameTagItem;
}

/** JVM class net.minecraft.world.item.PlaceOnWaterBlockItem. */
export interface PlaceOnWaterBlockItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type PlaceOnWaterBlockItem = PlaceOnWaterBlockItemMembers & BlockItem;
export interface PlaceOnWaterBlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): PlaceOnWaterBlockItem;
}

/** JVM class net.minecraft.world.item.PlayerHeadItem. */
export interface PlayerHeadItemMembers {
  readonly __javaSupertypes?: readonly [StandingAndWallBlockItem];
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
  verifyComponentsAfterLoad(arg0: ItemStack): void;
}
export type PlayerHeadItem = PlayerHeadItemMembers & StandingAndWallBlockItem;
export interface PlayerHeadItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, arg2: Item_Properties): PlayerHeadItem;
}

/** JVM class net.minecraft.world.item.PotionItem. */
export interface PotionItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getDefaultInstance(): ItemStack;
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type PotionItem = PotionItemMembers & Item;
export interface PotionItemStatics {
  new(arg0: Item_Properties): PotionItem;
}

/** JVM interface net.minecraft.world.item.ProjectileItem. */
export interface ProjectileItemMembers {
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  shoot(arg0: j_net_minecraft_world_entity_projectile.Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}
export type ProjectileItem = ProjectileItemMembers;
export interface ProjectileItemStatics {
}

/** JVM record net.minecraft.world.item.ProjectileItem$DispenseConfig. */
export interface ProjectileItem_DispenseConfigMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  overrideDispenseEvent(): JavaOptionalNumber;
  positionFunction(): ProjectileItem_PositionFunction;
  power(): number;
  toString(): string;
  uncertainty(): number;
}
export type ProjectileItem_DispenseConfig = ProjectileItem_DispenseConfigMembers & JavaOpaque<"java.lang.Record">;
export interface ProjectileItem_DispenseConfigStatics {
  new(arg0: ProjectileItem_PositionFunction, arg1: number, arg2: number, arg3: JavaOptionalNumber): ProjectileItem_DispenseConfig;
  readonly DEFAULT: ProjectileItem_DispenseConfig;
  builder(): ProjectileItem_DispenseConfig_Builder;
}

/** JVM class net.minecraft.world.item.ProjectileItem$DispenseConfig$Builder. */
export interface ProjectileItem_DispenseConfig_BuilderMembers {
  build(): ProjectileItem_DispenseConfig;
  overrideDispenseEvent(arg0: number): ProjectileItem_DispenseConfig_Builder;
  positionFunction(arg0: ProjectileItem_PositionFunction): ProjectileItem_DispenseConfig_Builder;
  power(arg0: number): ProjectileItem_DispenseConfig_Builder;
  uncertainty(arg0: number): ProjectileItem_DispenseConfig_Builder;
}
export type ProjectileItem_DispenseConfig_Builder = ProjectileItem_DispenseConfig_BuilderMembers;
export interface ProjectileItem_DispenseConfig_BuilderStatics {
  new(): ProjectileItem_DispenseConfig_Builder;
}

/** JVM interface net.minecraft.world.item.ProjectileItem$PositionFunction. */
export interface ProjectileItem_PositionFunctionMembers {
  getDispensePosition(arg0: j_net_minecraft_core_dispenser.BlockSource, arg1: j_net_minecraft_core.Direction): j_net_minecraft_core.Position;
}
export type ProjectileItem_PositionFunction = ProjectileItem_PositionFunctionMembers;
export interface ProjectileItem_PositionFunctionStatics {
}

/** JVM abstract net.minecraft.world.item.ProjectileWeaponItem. */
export interface ProjectileWeaponItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getAllSupportedProjectiles(): JavaPredicate<ItemStack>;
  getDefaultProjectileRange(): number;
  getSupportedHeldProjectiles(): JavaPredicate<ItemStack>;
}
export type ProjectileWeaponItem = ProjectileWeaponItemMembers & Item;
export interface ProjectileWeaponItemStatics {
  readonly ARROW_ONLY: JavaPredicate<ItemStack>;
  readonly ARROW_OR_FIREWORK: JavaPredicate<ItemStack>;
  getHeldProjectile(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: JavaPredicate<ItemStack>): ItemStack;
}

/** Live JVM enum net.minecraft.world.item.Rarity; constants are host handles, not strings. */
export type Rarity = JavaEnum<"net.minecraft.world.item.Rarity", "COMMON" | "EPIC" | "RARE" | "UNCOMMON"> & RarityMembers;
export interface RarityMembers {
  color(): j_net_minecraft.ChatFormatting;
  getSerializedName(): string;
}
export interface RarityStatics {
  readonly COMMON: Rarity;
  readonly EPIC: Rarity;
  readonly RARE: Rarity;
  readonly UNCOMMON: Rarity;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Rarity]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Rarity]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Rarity>;
  valueOf(arg0: string): Rarity;
  values(): Array<Rarity>;
}

/** JVM class net.minecraft.world.item.ScaffoldingBlockItem. */
export interface ScaffoldingBlockItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
  updatePlacementContext(arg0: j_net_minecraft_world_item_context.BlockPlaceContext): j_net_minecraft_world_item_context.BlockPlaceContext | null;
}
export type ScaffoldingBlockItem = ScaffoldingBlockItemMembers & BlockItem;
export interface ScaffoldingBlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: Item_Properties): ScaffoldingBlockItem;
}

/** JVM class net.minecraft.world.item.ServerItemCooldowns. */
export interface ServerItemCooldownsMembers {
  readonly __javaSupertypes?: readonly [ItemCooldowns];
  addCooldown(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number, arg2: boolean): void;
  addCooldown(arg0: ItemStack, arg1: number): void;
}
export type ServerItemCooldowns = ServerItemCooldownsMembers & ItemCooldowns;
export interface ServerItemCooldownsStatics {
  new(arg0: j_net_minecraft_server_level.ServerPlayer): ServerItemCooldowns;
}

/** JVM class net.minecraft.world.item.ShearsItem. */
export interface ShearsItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  mineBlock(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_world_entity.LivingEntity): boolean;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type ShearsItem = ShearsItemMembers & Item;
export interface ShearsItemStatics {
  new(arg0: Item_Properties): ShearsItem;
  createToolProperties(): j_net_minecraft_world_item_component.Tool;
}

/** JVM class net.minecraft.world.item.ShieldItem. */
export interface ShieldItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
}
export type ShieldItem = ShieldItemMembers & Item;
export interface ShieldItemStatics {
  new(arg0: Item_Properties): ShieldItem;
}

/** JVM class net.minecraft.world.item.ShovelItem. */
export interface ShovelItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type ShovelItem = ShovelItemMembers & Item;
export interface ShovelItemStatics {
  new(arg0: ToolMaterial, arg1: number, arg2: number, arg3: Item_Properties): ShovelItem;
}

/** JVM interface net.minecraft.world.item.SignApplicator. */
export interface SignApplicatorMembers {
  canApplyToSign(arg0: j_net_minecraft_world_level_block_entity.SignText, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  tryApplyToSign(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg2: boolean, arg3: j_net_minecraft_world_entity_player.Player): boolean;
}
export type SignApplicator = SignApplicatorMembers;
export interface SignApplicatorStatics {
}

/** JVM class net.minecraft.world.item.SignItem. */
export interface SignItemMembers {
  readonly __javaSupertypes?: readonly [StandingAndWallBlockItem];
}
export type SignItem = SignItemMembers & StandingAndWallBlockItem;
export interface SignItemStatics {
  new(arg0: Item_Properties, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_world_level_block.Block, arg3: j_net_minecraft_core.Direction): SignItem;
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, arg2: Item_Properties): SignItem;
  readonly openSign: j_net_minecraft_core.BlockPos;
}

/** JVM class net.minecraft.world.item.SmithingTemplateItem. */
export interface SmithingTemplateItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  appendHoverText(arg0: ItemStack, arg1: Item_TooltipContext, arg2: j_net_minecraft_world_item_component.TooltipDisplay, arg3: JavaConsumer<j_net_minecraft_network_chat.Component>, arg4: TooltipFlag): void;
  getAdditionSlotDescription(): j_net_minecraft_network_chat.Component;
  getAdditionalSlotEmptyIcons(): JavaList<j_net_minecraft_resources.ResourceLocation>;
  getBaseSlotDescription(): j_net_minecraft_network_chat.Component;
  getBaseSlotEmptyIcons(): JavaList<j_net_minecraft_resources.ResourceLocation>;
}
export type SmithingTemplateItem = SmithingTemplateItemMembers & Item;
export interface SmithingTemplateItemStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_network_chat.Component, arg3: j_net_minecraft_network_chat.Component, arg4: JavaList<j_net_minecraft_resources.ResourceLocation>, arg5: JavaList<j_net_minecraft_resources.ResourceLocation>, arg6: Item_Properties): SmithingTemplateItem;
  createArmorTrimTemplate(arg0: Item_Properties): SmithingTemplateItem;
  createNetheriteUpgradeTemplate(arg0: Item_Properties): SmithingTemplateItem;
}

/** JVM class net.minecraft.world.item.SnowballItem. */
export interface SnowballItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type SnowballItem = SnowballItemMembers & Item & ProjectileItem;
export interface SnowballItemStatics {
  new(arg0: Item_Properties): SnowballItem;
  readonly PROJECTILE_SHOOT_POWER: number;
}

/** JVM class net.minecraft.world.item.SolidBucketItem. */
export interface SolidBucketItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem, DispensibleContainerItem];
  emptyContents(arg0: j_net_minecraft_world_entity.LivingEntity | null, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_phys.BlockHitResult | null): boolean;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type SolidBucketItem = SolidBucketItemMembers & BlockItem & DispensibleContainerItem;
export interface SolidBucketItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_sounds.SoundEvent, arg2: Item_Properties): SolidBucketItem;
}

/** JVM class net.minecraft.world.item.SpawnEggItem. */
export interface SpawnEggItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  getType(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: ItemStack): j_net_minecraft_world_entity.EntityType<object>;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  shouldPrintOpWarning(arg0: ItemStack, arg1: j_net_minecraft_world_entity_player.Player | null): boolean;
  spawnOffspringFromSpawnEgg(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_entity.Mob, arg2: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity.Mob>, arg3: j_net_minecraft_server_level.ServerLevel, arg4: j_net_minecraft_world_phys.Vec3, arg5: ItemStack): JavaOptional<j_net_minecraft_world_entity.Mob>;
  spawnsEntity(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: ItemStack, arg2: j_net_minecraft_world_entity.EntityType<object>): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  useOn(arg0: j_net_minecraft_world_item_context.UseOnContext): j_net_minecraft_world.InteractionResult;
}
export type SpawnEggItem = SpawnEggItemMembers & Item;
export interface SpawnEggItemStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<j_net_minecraft_world_entity.Mob>, arg1: Item_Properties): SpawnEggItem;
  byId(arg0: j_net_minecraft_world_entity.EntityType<object> | null): SpawnEggItem | null;
  eggs(): Iterable<SpawnEggItem>;
}

/** JVM class net.minecraft.world.item.SpectralArrowItem. */
export interface SpectralArrowItemMembers {
  readonly __javaSupertypes?: readonly [ArrowItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createArrow(arg0: j_net_minecraft_world_level.Level, arg1: ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: ItemStack | null): j_net_minecraft_world_entity_projectile.AbstractArrow;
}
export type SpectralArrowItem = SpectralArrowItemMembers & ArrowItem;
export interface SpectralArrowItemStatics {
  new(arg0: Item_Properties): SpectralArrowItem;
}

/** JVM class net.minecraft.world.item.SplashPotionItem. */
export interface SplashPotionItemMembers {
  readonly __javaSupertypes?: readonly [ThrowablePotionItem];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type SplashPotionItem = SplashPotionItemMembers & ThrowablePotionItem;
export interface SplashPotionItemStatics {
  new(arg0: Item_Properties): SplashPotionItem;
}

/** JVM class net.minecraft.world.item.SpyglassItem. */
export interface SpyglassItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  finishUsingItem(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity): ItemStack;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  releaseUsing(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: number): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type SpyglassItem = SpyglassItemMembers & Item;
export interface SpyglassItemStatics {
  new(arg0: Item_Properties): SpyglassItem;
  readonly USE_DURATION: 1200;
  readonly ZOOM_FOV_MODIFIER: 0.1;
}

/** JVM class net.minecraft.world.item.StandingAndWallBlockItem. */
export interface StandingAndWallBlockItemMembers {
  readonly __javaSupertypes?: readonly [BlockItem];
  registerBlocks(arg0: JavaMap<j_net_minecraft_world_level_block.Block, Item>, arg1: Item): void;
  readonly wallBlock: j_net_minecraft_world_level_block.Block;
}
export type StandingAndWallBlockItem = StandingAndWallBlockItemMembers & BlockItem;
export interface StandingAndWallBlockItemStatics {
  new(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_world_level_block.Block, arg2: j_net_minecraft_core.Direction, arg3: Item_Properties): StandingAndWallBlockItem;
}

/** JVM abstract net.minecraft.world.item.ThrowablePotionItem. */
export interface ThrowablePotionItemMembers {
  readonly __javaSupertypes?: readonly [PotionItem, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type ThrowablePotionItem = ThrowablePotionItemMembers & PotionItem & ProjectileItem;
export interface ThrowablePotionItemStatics {
  readonly PROJECTILE_SHOOT_POWER: number;
}

/** JVM class net.minecraft.world.item.TippedArrowItem. */
export interface TippedArrowItemMembers {
  readonly __javaSupertypes?: readonly [ArrowItem];
  getDefaultInstance(): ItemStack;
  getName(arg0: ItemStack): j_net_minecraft_network_chat.Component;
}
export type TippedArrowItem = TippedArrowItemMembers & ArrowItem;
export interface TippedArrowItemStatics {
  new(arg0: Item_Properties): TippedArrowItem;
}

/** JVM record net.minecraft.world.item.ToolMaterial. */
export interface ToolMaterialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  applySwordProperties(arg0: Item_Properties, arg1: number, arg2: number): Item_Properties;
  applyToolProperties(arg0: Item_Properties, arg1: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg2: number, arg3: number, arg4: number): Item_Properties;
  attackDamageBonus(): number;
  durability(): number;
  enchantmentValue(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  incorrectBlocksForDrops(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>;
  repairItems(): j_net_minecraft_tags.TagKey<Item>;
  speed(): number;
  toString(): string;
}
export type ToolMaterial = ToolMaterialMembers & JavaOpaque<"java.lang.Record">;
export interface ToolMaterialStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: j_net_minecraft_tags.TagKey<Item>): ToolMaterial;
  readonly DIAMOND: ToolMaterial;
  readonly GOLD: ToolMaterial;
  readonly IRON: ToolMaterial;
  readonly NETHERITE: ToolMaterial;
  readonly STONE: ToolMaterial;
  readonly WOOD: ToolMaterial;
}

/** JVM interface net.minecraft.world.item.TooltipFlag. */
export interface TooltipFlagMembers {
  isAdvanced(): boolean;
  isCreative(): boolean;
}
export type TooltipFlag = TooltipFlagMembers;
export interface TooltipFlagStatics {
  readonly ADVANCED: TooltipFlag_Default;
  readonly NORMAL: TooltipFlag_Default;
}

/** JVM record net.minecraft.world.item.TooltipFlag$Default. */
export interface TooltipFlag_DefaultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipFlag];
  advanced(): boolean;
  asCreative(): TooltipFlag_Default;
  creative(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  isAdvanced(): boolean;
  isCreative(): boolean;
  toString(): string;
}
export type TooltipFlag_Default = TooltipFlag_DefaultMembers & JavaOpaque<"java.lang.Record"> & TooltipFlag;
export interface TooltipFlag_DefaultStatics {
  new(arg0: boolean, arg1: boolean): TooltipFlag_Default;
}

/** JVM class net.minecraft.world.item.TridentItem. */
export interface TridentItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  getUseAnimation(arg0: ItemStack): ItemUseAnimation;
  getUseDuration(arg0: ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): number;
  releaseUsing(arg0: ItemStack, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: number): boolean;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type TridentItem = TridentItemMembers & Item & ProjectileItem;
export interface TridentItemStatics {
  new(arg0: Item_Properties): TridentItem;
  readonly BASE_DAMAGE: 8;
  readonly PROJECTILE_SHOOT_POWER: 2.5;
  readonly THROW_THRESHOLD_TIME: 10;
  createAttributes(): j_net_minecraft_world_item_component.ItemAttributeModifiers;
  createToolProperties(): j_net_minecraft_world_item_component.Tool;
}

/** JVM class net.minecraft.world.item.WindChargeItem. */
export interface WindChargeItemMembers {
  readonly __javaSupertypes?: readonly [Item, ProjectileItem];
  asProjectile(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.Position, arg2: ItemStack, arg3: j_net_minecraft_core.Direction): j_net_minecraft_world_entity_projectile.Projectile;
  createDispenseConfig(): ProjectileItem_DispenseConfig;
  shoot(arg0: j_net_minecraft_world_entity_projectile.Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type WindChargeItem = WindChargeItemMembers & Item & ProjectileItem;
export interface WindChargeItemStatics {
  new(arg0: Item_Properties): WindChargeItem;
  readonly PROJECTILE_SHOOT_POWER: number;
}

/** JVM class net.minecraft.world.item.WritableBookItem. */
export interface WritableBookItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type WritableBookItem = WritableBookItemMembers & Item;
export interface WritableBookItemStatics {
  new(arg0: Item_Properties): WritableBookItem;
}

/** JVM class net.minecraft.world.item.WrittenBookItem. */
export interface WrittenBookItemMembers {
  readonly __javaSupertypes?: readonly [Item];
  use(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
}
export type WrittenBookItem = WrittenBookItemMembers & Item;
export interface WrittenBookItemStatics {
  new(arg0: Item_Properties): WrittenBookItem;
}
