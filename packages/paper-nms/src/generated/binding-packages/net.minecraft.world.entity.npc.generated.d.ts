// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_gossip from './net.minecraft.world.entity.ai.gossip.generated.js';
import type * as j_net_minecraft_world_entity_ai_memory from './net.minecraft.world.entity.ai.memory.generated.js';
import type * as j_net_minecraft_world_entity_ai_village from './net.minecraft.world.entity.ai.village.generated.js';
import type * as j_net_minecraft_world_entity_ai_village_poi from './net.minecraft.world.entity.ai.village.poi.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_org_bukkit_craftbukkit_inventory from './org.bukkit.craftbukkit.inventory.generated.js';

/** JVM abstract net.minecraft.world.entity.npc.AbstractVillager. */
export interface AbstractVillagerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.AgeableMob, InventoryCarrier, Npc, j_net_minecraft_world_item_trading.Merchant];
  canBeLeashed(): boolean;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData;
  getCraftMerchant(): j_org_bukkit_craftbukkit_inventory.CraftMerchant;
  getInventory(): j_net_minecraft_world.SimpleContainer;
  getNotifyTradeSound(): j_net_minecraft_sounds.SoundEvent;
  getOffers(): j_net_minecraft_world_item_trading.MerchantOffers;
  getRopeHoldPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getTradingPlayer(): j_net_minecraft_world_entity_player.Player | null;
  getUnhappyCounter(): number;
  getVillagerXp(): number;
  isClientSide(): boolean;
  isTrading(): boolean;
  notifyTrade(arg0: j_net_minecraft_world_item_trading.MerchantOffer): void;
  notifyTradeUpdated(arg0: j_net_minecraft_world_item.ItemStack): void;
  overrideOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers | null): void;
  overrideXp(arg0: number): void;
  playCelebrateSound(): void;
  processTrade(arg0: j_net_minecraft_world_item_trading.MerchantOffer, arg1: JavaOpaque<"io.papermc.paper.event.player.PlayerPurchaseEvent"> | null): void;
  resetOffers(): void;
  setTradingPlayer(arg0: j_net_minecraft_world_entity_player.Player | null): void;
  setUnhappyCounter(arg0: number): void;
  showProgressBar(): boolean;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): j_net_minecraft_world_entity.Entity | null;
}
export type AbstractVillager = AbstractVillagerMembers & j_net_minecraft_world_entity.AgeableMob & InventoryCarrier & Npc & j_net_minecraft_world_item_trading.Merchant;
export interface AbstractVillagerStatics {
  readonly VILLAGER_SLOT_OFFSET: 300;
}

/** JVM class net.minecraft.world.entity.npc.CatSpawner. */
export interface CatSpawnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.CustomSpawner];
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type CatSpawner = CatSpawnerMembers & j_net_minecraft_world_level.CustomSpawner;
export interface CatSpawnerStatics {
  new(): CatSpawner;
}

/** JVM class net.minecraft.world.entity.npc.ClientSideMerchant. */
export interface ClientSideMerchantMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_item_trading.Merchant];
  getCraftMerchant(): j_org_bukkit_craftbukkit_inventory.CraftMerchant;
  getNotifyTradeSound(): j_net_minecraft_sounds.SoundEvent;
  getOffers(): j_net_minecraft_world_item_trading.MerchantOffers;
  getTradingPlayer(): j_net_minecraft_world_entity_player.Player;
  getVillagerXp(): number;
  isClientSide(): boolean;
  notifyTrade(arg0: j_net_minecraft_world_item_trading.MerchantOffer): void;
  notifyTradeUpdated(arg0: j_net_minecraft_world_item.ItemStack): void;
  overrideOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers): void;
  overrideXp(arg0: number): void;
  setTradingPlayer(arg0: j_net_minecraft_world_entity_player.Player | null): void;
  showProgressBar(): boolean;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
}
export type ClientSideMerchant = ClientSideMerchantMembers & j_net_minecraft_world_item_trading.Merchant;
export interface ClientSideMerchantStatics {
  new(arg0: j_net_minecraft_world_entity_player.Player): ClientSideMerchant;
}

/** JVM interface net.minecraft.world.entity.npc.InventoryCarrier. */
export interface InventoryCarrierMembers {
  getInventory(): j_net_minecraft_world.SimpleContainer;
  readInventoryFromTag(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  writeInventoryToTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
}
export type InventoryCarrier = InventoryCarrierMembers;
export interface InventoryCarrierStatics {
  readonly TAG_INVENTORY: "Inventory";
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.Mob, arg2: InventoryCarrier, arg3: j_net_minecraft_world_entity_item.ItemEntity): void;
}

/** JVM interface net.minecraft.world.entity.npc.Npc. */
export interface NpcMembers {
}
export type Npc = NpcMembers;
export interface NpcStatics {
}

/** JVM class net.minecraft.world.entity.npc.Villager. */
export interface VillagerMembers {
  readonly __javaSupertypes?: readonly [AbstractVillager, j_net_minecraft_world_entity.ReputationEventHandler, VillagerDataHolder];
  assignProfessionWhenSpawned(): boolean;
  canBreed(): boolean;
  canRestock(): boolean;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  eatAndDigestFood(): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: j_net_minecraft_world_entity.EntitySpawnReason, arg3: j_net_minecraft_world_entity.SpawnGroupData | null): j_net_minecraft_world_entity.SpawnGroupData | null;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<Villager>;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): Villager | null;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getGossips(): j_net_minecraft_world_entity_ai_gossip.GossipContainer;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getPlayerReputation(arg0: j_net_minecraft_world_entity_player.Player): number;
  getVillagerData(): VillagerData;
  getVillagerXp(): number;
  gossip(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Villager, arg2: bigint): void;
  handleEntityEvent(arg0: number): void;
  hasExcessFood(): boolean;
  hasFarmSeeds(): boolean;
  inactiveTick(): void;
  increaseMerchantCareer(): void;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  numberOfRestocksToday: number;
  onReputationEventFrom(arg0: j_net_minecraft_world_entity_ai_village.ReputationEventType, arg1: j_net_minecraft_world_entity.Entity): void;
  playWorkSound(): void;
  refreshBrain(arg0: j_net_minecraft_server_level.ServerLevel): void;
  releaseAllPois(): void;
  releasePoi(arg0: j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>): void;
  removeWhenFarAway(arg0: number): boolean;
  restock(): void;
  setGossips(arg0: j_net_minecraft_world_entity_ai_gossip.GossipContainer): void;
  setLastHurtByMob(arg0: j_net_minecraft_world_entity.LivingEntity | null): void;
  setOffers(arg0: j_net_minecraft_world_item_trading.MerchantOffers): void;
  setTradingPlayer(arg0: j_net_minecraft_world_entity_player.Player | null): void;
  setUnhappy(): void;
  setVillagerData(arg0: VillagerData): void;
  setVillagerXp(arg0: number): void;
  shouldRestock(): boolean;
  spawnGolemIfNeeded(arg0: j_net_minecraft_server_level.ServerLevel, arg1: bigint, arg2: number): void;
  startSleeping(arg0: j_net_minecraft_core.BlockPos): void;
  stopSleeping(): void;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LightningBolt): void;
  tick(): void;
  updateDemand(): void;
  updateTrades(arg0: number): boolean;
  wantsMoreFood(): boolean;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  wantsToSpawnGolem(arg0: bigint): boolean;
}
export type Villager = VillagerMembers & AbstractVillager & j_net_minecraft_world_entity.ReputationEventHandler & VillagerDataHolder;
export interface VillagerStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<Villager>, arg1: j_net_minecraft_world_level.Level): Villager;
  new(arg0: j_net_minecraft_world_entity.EntityType<Villager>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.Holder<VillagerType>): Villager;
  new(arg0: j_net_minecraft_world_entity.EntityType<Villager>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_resources.ResourceKey<VillagerType>): Villager;
  readonly BREEDING_FOOD_THRESHOLD: 12;
  readonly FOOD_POINTS: JavaMap<j_net_minecraft_world_item.Item, number>;
  readonly POI_MEMORIES: JavaMap<j_net_minecraft_world_entity_ai_memory.MemoryModuleType<j_net_minecraft_core.GlobalPos>, JavaOpaque<"java.util.function.BiPredicate", [Villager, j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>]>>;
  readonly SPEED_MODIFIER: 0.5;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  createDefaultVillagerData(): VillagerData;
}

/** JVM record net.minecraft.world.entity.npc.VillagerData. */
export interface VillagerDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  level(): number;
  profession(): j_net_minecraft_core.Holder<VillagerProfession>;
  toString(): string;
  type(): j_net_minecraft_core.Holder<VillagerType>;
  withLevel(arg0: number): VillagerData;
  withProfession(arg0: j_net_minecraft_core.Holder<VillagerProfession>): VillagerData;
  withProfession(arg0: j_net_minecraft_core.HolderGetter_Provider, arg1: j_net_minecraft_resources.ResourceKey<VillagerProfession>): VillagerData;
  withType(arg0: j_net_minecraft_core.Holder<VillagerType>): VillagerData;
  withType(arg0: j_net_minecraft_core.HolderGetter_Provider, arg1: j_net_minecraft_resources.ResourceKey<VillagerType>): VillagerData;
}
export type VillagerData = VillagerDataMembers & JavaOpaque<"java.lang.Record">;
export interface VillagerDataStatics {
  new(arg0: j_net_minecraft_core.Holder<VillagerType>, arg1: j_net_minecraft_core.Holder<VillagerProfession>, arg2: number): VillagerData;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [VillagerData]>;
  readonly MAX_VILLAGER_LEVEL: 5;
  readonly MIN_VILLAGER_LEVEL: 1;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, VillagerData>;
  canLevelUp(arg0: number): boolean;
  getMaxXpPerLevel(arg0: number): number;
  getMinXpPerLevel(arg0: number): number;
}

/** JVM interface net.minecraft.world.entity.npc.VillagerDataHolder. */
export interface VillagerDataHolderMembers {
  getVillagerData(): VillagerData;
  setVillagerData(arg0: VillagerData): void;
}
export type VillagerDataHolder = VillagerDataHolderMembers;
export interface VillagerDataHolderStatics {
}

/** JVM record net.minecraft.world.entity.npc.VillagerProfession. */
export interface VillagerProfessionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  acquirableJobSite(): JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  heldJobSite(): JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>;
  name(): j_net_minecraft_network_chat.Component;
  requestedItems(): JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_world_item.Item]>;
  secondaryPoi(): JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_world_level_block.Block]>;
  toString(): string;
  workSound(): j_net_minecraft_sounds.SoundEvent | null;
}
export type VillagerProfession = VillagerProfessionMembers & JavaOpaque<"java.lang.Record">;
export interface VillagerProfessionStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg2: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>, arg3: JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_world_item.Item]>, arg4: JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_world_level_block.Block]>, arg5: j_net_minecraft_sounds.SoundEvent | null): VillagerProfession;
  readonly ALL_ACQUIRABLE_JOBS: JavaPredicate<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_village_poi.PoiType>>;
  readonly ARMORER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly BUTCHER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly CARTOGRAPHER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly CLERIC: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly FARMER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly FISHERMAN: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly FLETCHER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly LEATHERWORKER: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly LIBRARIAN: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly MASON: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly NITWIT: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly NONE: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly SHEPHERD: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly TOOLSMITH: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  readonly WEAPONSMITH: j_net_minecraft_resources.ResourceKey<VillagerProfession>;
  bootstrap(arg0: j_net_minecraft_core.Registry<VillagerProfession>): VillagerProfession;
}

/** JVM class net.minecraft.world.entity.npc.VillagerTrades. */
export interface VillagerTradesMembers {
}
export type VillagerTrades = VillagerTradesMembers;
export interface VillagerTradesStatics {
  new(): VillagerTrades;
  readonly EXPERIMENTAL_TRADES: JavaMap<j_net_minecraft_resources.ResourceKey<VillagerProfession>, JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [Array<VillagerTrades_ItemListing>]>>;
  readonly TRADES: JavaMap<j_net_minecraft_resources.ResourceKey<VillagerProfession>, JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [Array<VillagerTrades_ItemListing>]>>;
  readonly WANDERING_TRADER_TRADES: JavaList<JavaOpaque<"org.apache.commons.lang3.tuple.Pair", [Array<VillagerTrades_ItemListing>, number]>>;
}

/** JVM interface net.minecraft.world.entity.npc.VillagerTrades$ItemListing. */
export interface VillagerTrades_ItemListingMembers {
  getOffer(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_util.RandomSource): j_net_minecraft_world_item_trading.MerchantOffer | null;
}
export type VillagerTrades_ItemListing = VillagerTrades_ItemListingMembers;
export interface VillagerTrades_ItemListingStatics {
}

/** JVM class net.minecraft.world.entity.npc.VillagerType. */
export interface VillagerTypeMembers {
}
export type VillagerType = VillagerTypeMembers;
export interface VillagerTypeStatics {
  new(): VillagerType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<VillagerType>]>;
  readonly DESERT: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly JUNGLE: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly PLAINS: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly SAVANNA: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly SNOW: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<VillagerType>>;
  readonly SWAMP: j_net_minecraft_resources.ResourceKey<VillagerType>;
  readonly TAIGA: j_net_minecraft_resources.ResourceKey<VillagerType>;
  bootstrap(arg0: j_net_minecraft_core.Registry<VillagerType>): VillagerType;
  byBiome(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_biome.Biome>): j_net_minecraft_resources.ResourceKey<VillagerType>;
}

/** JVM class net.minecraft.world.entity.npc.WanderingTrader. */
export interface WanderingTraderMembers {
  readonly __javaSupertypes?: readonly [AbstractVillager, j_net_minecraft_world_item_component.Consumable_OverrideConsumeSound];
  aiStep(): void;
  canDrinkMilk: boolean;
  canDrinkPotion: boolean;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.AgeableMob): j_net_minecraft_world_entity.AgeableMob | null;
  getConsumeSound(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_sounds.SoundEvent;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDespawnDelay(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getNotifyTradeSound(): j_net_minecraft_sounds.SoundEvent;
  getWanderTarget(): j_net_minecraft_core.BlockPos | null;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  removeWhenFarAway(arg0: number): boolean;
  setDespawnDelay(arg0: number): void;
  setWanderTarget(arg0: j_net_minecraft_core.BlockPos | null): void;
  showProgressBar(): boolean;
}
export type WanderingTrader = WanderingTraderMembers & AbstractVillager & j_net_minecraft_world_item_component.Consumable_OverrideConsumeSound;
export interface WanderingTraderStatics {
  new(arg0: j_net_minecraft_world_entity.EntityType<WanderingTrader>, arg1: j_net_minecraft_world_level.Level): WanderingTrader;
}

/** JVM class net.minecraft.world.entity.npc.WanderingTraderSpawner. */
export interface WanderingTraderSpawnerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level.CustomSpawner];
  tick(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean, arg2: boolean): void;
}
export type WanderingTraderSpawner = WanderingTraderSpawnerMembers & j_net_minecraft_world_level.CustomSpawner;
export interface WanderingTraderSpawnerStatics {
  new(arg0: j_net_minecraft_world_level_storage.ServerLevelData): WanderingTraderSpawner;
  readonly DEFAULT_SPAWN_DELAY: 24000;
}
