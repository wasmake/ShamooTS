// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';

/** JVM record net.minecraft.world.item.trading.ItemCost. */
export interface ItemCostMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  components(): j_net_minecraft_core_component.DataComponentExactPredicate;
  count(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  itemStack(): j_net_minecraft_world_item.ItemStack;
  test(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  toString(): string;
  withComponents(arg0: JavaOpaque<"java.util.function.UnaryOperator", [j_net_minecraft_core_component.DataComponentExactPredicate_Builder]>): ItemCost;
}
export type ItemCost = ItemCostMembers & JavaOpaque<"java.lang.Record">;
export interface ItemCostStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: number, arg2: j_net_minecraft_core_component.DataComponentExactPredicate): ItemCost;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: number, arg2: j_net_minecraft_core_component.DataComponentExactPredicate, arg3: j_net_minecraft_world_item.ItemStack): ItemCost;
  new(arg0: j_net_minecraft_world_level.ItemLike): ItemCost;
  new(arg0: j_net_minecraft_world_level.ItemLike, arg1: number): ItemCost;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemCost]>;
  readonly OPTIONAL_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaOptional<ItemCost>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemCost>;
}

/** JVM interface net.minecraft.world.item.trading.Merchant. */
export interface MerchantMembers {
  canRestock(): boolean;
  getCraftMerchant(): j_org_bukkit_craftbukkit_inventory.CraftMerchant;
  getNotifyTradeSound(): j_net_minecraft_sounds.SoundEvent;
  getOffers(): MerchantOffers;
  getTradingPlayer(): j_net_minecraft_world_entity_player.Player | null;
  getVillagerXp(): number;
  isClientSide(): boolean;
  notifyTrade(arg0: MerchantOffer): void;
  notifyTradeUpdated(arg0: j_net_minecraft_world_item.ItemStack): void;
  openTradingScreen(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_network_chat.Component, arg2: number): void;
  overrideOffers(arg0: MerchantOffers): void;
  overrideXp(arg0: number): void;
  processTrade(arg0: MerchantOffer, arg1: JavaOpaque<"io.papermc.paper.event.player.PlayerPurchaseEvent"> | null): void;
  setTradingPlayer(arg0: j_net_minecraft_world_entity_player.Player | null): void;
  showProgressBar(): boolean;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type Merchant = MerchantMembers;
export interface MerchantStatics {
}

/** JVM class net.minecraft.world.item.trading.MerchantOffer. */
export interface MerchantOfferMembers {
  addToSpecialPriceDiff(arg0: number): void;
  asBukkit(): j_org_bukkit_craftbukkit_inventory.CraftMerchantRecipe;
  assemble(): j_net_minecraft_world_item.ItemStack;
  baseCostA: ItemCost;
  copy(): MerchantOffer;
  costB: JavaOptional<ItemCost>;
  demand: number;
  getBaseCostA(): j_net_minecraft_world_item.ItemStack;
  getCostA(): j_net_minecraft_world_item.ItemStack;
  getCostB(): j_net_minecraft_world_item.ItemStack;
  getDemand(): number;
  getItemCostA(): ItemCost;
  getItemCostB(): JavaOptional<ItemCost>;
  getMaxUses(): number;
  getPriceMultiplier(): number;
  getResult(): j_net_minecraft_world_item.ItemStack;
  getSpecialPriceDiff(): number;
  getUses(): number;
  getXp(): number;
  ignoreDiscounts: boolean;
  increaseUses(): void;
  isOutOfStock(): boolean;
  maxUses: number;
  needsRestock(): boolean;
  priceMultiplier: number;
  resetSpecialPriceDiff(): void;
  resetUses(): void;
  readonly result: j_net_minecraft_world_item.ItemStack;
  rewardExp: boolean;
  satisfiedBy(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  setSpecialPriceDiff(arg0: number): void;
  setToOutOfStock(): void;
  shouldRewardExp(): boolean;
  specialPriceDiff: number;
  take(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  updateDemand(): void;
  uses: number;
  xp: number;
}
export type MerchantOffer = MerchantOfferMembers;
export interface MerchantOfferStatics {
  new(arg0: ItemCost, arg1: JavaOptional<ItemCost>, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number): MerchantOffer;
  new(arg0: ItemCost, arg1: JavaOptional<ItemCost>, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number, arg6: number): MerchantOffer;
  new(arg0: ItemCost, arg1: JavaOptional<ItemCost>, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): MerchantOffer;
  new(arg0: ItemCost, arg1: JavaOptional<ItemCost>, arg2: j_net_minecraft_world_item.ItemStack, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: j_org_bukkit_craftbukkit_inventory.CraftMerchantRecipe): MerchantOffer;
  new(arg0: ItemCost, arg1: j_net_minecraft_world_item.ItemStack, arg2: number, arg3: number, arg4: number): MerchantOffer;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MerchantOffer]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, MerchantOffer>;
  createFromStream(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): MerchantOffer;
}

/** JVM class net.minecraft.world.item.trading.MerchantOffers. */
export interface MerchantOffersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.ArrayList", [MerchantOffer]>];
  copy(): MerchantOffers;
  getRecipeFor(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): MerchantOffer | null;
}
export type MerchantOffers = MerchantOffersMembers & JavaOpaque<"java.util.ArrayList", [MerchantOffer]>;
export interface MerchantOffersStatics {
  new(): MerchantOffers;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MerchantOffers]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, MerchantOffers>;
}
