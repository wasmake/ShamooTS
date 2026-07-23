// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM record net.minecraft.advancements.Advancement. */
export interface AdvancementMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  criteria(): JavaMap<string, Criterion<object>>;
  display(): JavaOptional<DisplayInfo>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isRoot(): boolean;
  name(): JavaOptional<j_net_minecraft_network_chat.Component>;
  parent(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  requirements(): AdvancementRequirements;
  rewards(): AdvancementRewards;
  sendsTelemetryEvent(): boolean;
  toString(): string;
  validate(arg0: j_net_minecraft_util.ProblemReporter, arg1: j_net_minecraft_core.HolderGetter_Provider): void;
}
export type Advancement = AdvancementMembers & JavaOpaque<"java.lang.Record">;
export interface AdvancementStatics {
  new(arg0: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg1: JavaOptional<DisplayInfo>, arg2: AdvancementRewards, arg3: JavaMap<string, Criterion<object>>, arg4: AdvancementRequirements, arg5: boolean): Advancement;
  new(arg0: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg1: JavaOptional<DisplayInfo>, arg2: AdvancementRewards, arg3: JavaMap<string, Criterion<object>>, arg4: AdvancementRequirements, arg5: boolean, arg6: JavaOptional<j_net_minecraft_network_chat.Component>): Advancement;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Advancement]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Advancement>;
  decorateName(arg0: DisplayInfo): j_net_minecraft_network_chat.Component;
  name(arg0: AdvancementHolder): j_net_minecraft_network_chat.Component;
}

/** JVM class net.minecraft.advancements.Advancement$Builder. */
export interface Advancement_BuilderMembers {
  addCriterion(arg0: string, arg1: Criterion<object>): Advancement_Builder;
  build(arg0: j_net_minecraft_resources.ResourceLocation): AdvancementHolder;
  display(arg0: DisplayInfo): Advancement_Builder;
  display(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_network_chat.Component, arg3: j_net_minecraft_resources.ResourceLocation | null, arg4: AdvancementType, arg5: boolean, arg6: boolean, arg7: boolean): Advancement_Builder | null;
  display(arg0: j_net_minecraft_world_level.ItemLike, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_network_chat.Component, arg3: j_net_minecraft_resources.ResourceLocation | null, arg4: AdvancementType, arg5: boolean, arg6: boolean, arg7: boolean): Advancement_Builder | null;
  parent(arg0: AdvancementHolder): Advancement_Builder;
  parent(arg0: j_net_minecraft_resources.ResourceLocation): Advancement_Builder;
  requirements(arg0: AdvancementRequirements_Strategy): Advancement_Builder;
  requirements(arg0: AdvancementRequirements): Advancement_Builder;
  rewards(arg0: AdvancementRewards_Builder): Advancement_Builder;
  rewards(arg0: AdvancementRewards): Advancement_Builder;
  save(arg0: JavaConsumer<AdvancementHolder>, arg1: string): AdvancementHolder;
  sendsTelemetryEvent(): Advancement_Builder;
}
export type Advancement_Builder = Advancement_BuilderMembers;
export interface Advancement_BuilderStatics {
  new(): Advancement_Builder;
  advancement(): Advancement_Builder;
  recipeAdvancement(): Advancement_Builder;
}

/** JVM record net.minecraft.advancements.AdvancementHolder. */
export interface AdvancementHolderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toBukkit(): JavaOpaque<"org.bukkit.advancement.Advancement">;
  toString(): string;
  value(): Advancement;
}
export type AdvancementHolder = AdvancementHolderMembers & JavaOpaque<"java.lang.Record">;
export interface AdvancementHolderStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: Advancement): AdvancementHolder;
  readonly LIST_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, JavaList<AdvancementHolder>>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, AdvancementHolder>;
}

/** JVM class net.minecraft.advancements.AdvancementNode. */
export interface AdvancementNodeMembers {
  addChild(arg0: AdvancementNode): void;
  advancement(): Advancement;
  children(): Iterable<AdvancementNode>;
  equals(arg0: object): boolean;
  hashCode(): number;
  holder(): AdvancementHolder;
  parent(): AdvancementNode | null;
  root(): AdvancementNode;
  toString(): string;
}
export type AdvancementNode = AdvancementNodeMembers;
export interface AdvancementNodeStatics {
  new(arg0: AdvancementHolder, arg1: AdvancementNode | null): AdvancementNode;
  getRoot(arg0: AdvancementNode): AdvancementNode;
}

/** JVM class net.minecraft.advancements.AdvancementProgress. */
export interface AdvancementProgressMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Comparable", [AdvancementProgress]>];
  compareTo(arg0: object): number;
  compareTo(arg0: AdvancementProgress): number;
  getCompletedCriteria(): Iterable<string>;
  getCriterion(arg0: string): CriterionProgress | null;
  getFirstProgressDate(): JavaOpaque<"java.time.Instant"> | null;
  getPercent(): number;
  getProgressText(): j_net_minecraft_network_chat.Component | null;
  getRemainingCriteria(): Iterable<string>;
  grantProgress(arg0: string): boolean;
  hasProgress(): boolean;
  isDone(): boolean;
  revokeProgress(arg0: string): boolean;
  serializeToNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  toString(): string;
  update(arg0: AdvancementRequirements): void;
}
export type AdvancementProgress = AdvancementProgressMembers;
export interface AdvancementProgressStatics {
  new(): AdvancementProgress;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AdvancementProgress]>;
  fromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): AdvancementProgress;
}

/** JVM record net.minecraft.advancements.AdvancementRequirements. */
export interface AdvancementRequirementsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  count(arg0: JavaPredicate<string>): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  names(): JavaSet<string>;
  requirements(): JavaList<JavaList<string>>;
  size(): number;
  test(arg0: JavaPredicate<string>): boolean;
  toString(): string;
  validate(arg0: JavaSet<string>): JavaOpaque<"com.mojang.serialization.DataResult", [AdvancementRequirements]>;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type AdvancementRequirements = AdvancementRequirementsMembers & JavaOpaque<"java.lang.Record">;
export interface AdvancementRequirementsStatics {
  new(arg0: JavaList<JavaList<string>>): AdvancementRequirements;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): AdvancementRequirements;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AdvancementRequirements]>;
  readonly EMPTY: AdvancementRequirements;
  allOf(arg0: JavaCollection<string>): AdvancementRequirements;
  anyOf(arg0: JavaCollection<string>): AdvancementRequirements;
}

/** JVM interface net.minecraft.advancements.AdvancementRequirements$Strategy. */
export interface AdvancementRequirements_StrategyMembers {
  create(arg0: JavaCollection<string>): AdvancementRequirements;
}
export type AdvancementRequirements_Strategy = AdvancementRequirements_StrategyMembers;
export interface AdvancementRequirements_StrategyStatics {
  readonly AND: AdvancementRequirements_Strategy;
  readonly OR: AdvancementRequirements_Strategy;
}

/** JVM record net.minecraft.advancements.AdvancementRewards. */
export interface AdvancementRewardsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  experience(): number;
  function(): JavaOptional<j_net_minecraft_commands.CacheableFunction>;
  grant(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  hashCode(): number;
  loot(): JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  recipes(): JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>;
  toString(): string;
}
export type AdvancementRewards = AdvancementRewardsMembers & JavaOpaque<"java.lang.Record">;
export interface AdvancementRewardsStatics {
  new(arg0: number, arg1: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>, arg2: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>, arg3: JavaOptional<j_net_minecraft_commands.CacheableFunction>): AdvancementRewards;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AdvancementRewards]>;
  readonly EMPTY: AdvancementRewards;
}

/** JVM class net.minecraft.advancements.AdvancementRewards$Builder. */
export interface AdvancementRewards_BuilderMembers {
  addExperience(arg0: number): AdvancementRewards_Builder;
  addLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): AdvancementRewards_Builder;
  addRecipe(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): AdvancementRewards_Builder;
  build(): AdvancementRewards;
  runs(arg0: j_net_minecraft_resources.ResourceLocation): AdvancementRewards_Builder;
}
export type AdvancementRewards_Builder = AdvancementRewards_BuilderMembers;
export interface AdvancementRewards_BuilderStatics {
  new(): AdvancementRewards_Builder;
  experience(arg0: number): AdvancementRewards_Builder;
  function(arg0: j_net_minecraft_resources.ResourceLocation): AdvancementRewards_Builder;
  loot(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): AdvancementRewards_Builder;
  recipe(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>): AdvancementRewards_Builder;
}

/** JVM class net.minecraft.advancements.AdvancementTree. */
export interface AdvancementTreeMembers {
  addAll(arg0: JavaCollection<AdvancementHolder>): void;
  clear(): void;
  get(arg0: AdvancementHolder): AdvancementNode | null;
  get(arg0: j_net_minecraft_resources.ResourceLocation): AdvancementNode | null;
  nodes(): JavaCollection<AdvancementNode>;
  remove(arg0: JavaSet<j_net_minecraft_resources.ResourceLocation>): void;
  roots(): Iterable<AdvancementNode>;
  setListener(arg0: AdvancementTree_Listener | null): void | null;
}
export type AdvancementTree = AdvancementTreeMembers;
export interface AdvancementTreeStatics {
  new(): AdvancementTree;
}

/** JVM interface net.minecraft.advancements.AdvancementTree$Listener. */
export interface AdvancementTree_ListenerMembers {
  onAddAdvancementRoot(arg0: AdvancementNode): void;
  onAddAdvancementTask(arg0: AdvancementNode): void;
  onAdvancementsCleared(): void;
  onRemoveAdvancementRoot(arg0: AdvancementNode): void;
  onRemoveAdvancementTask(arg0: AdvancementNode): void;
}
export type AdvancementTree_Listener = AdvancementTree_ListenerMembers;
export interface AdvancementTree_ListenerStatics {
}

/** Live JVM enum net.minecraft.advancements.AdvancementType; constants are host handles, not strings. */
export type AdvancementType = JavaEnum<"net.minecraft.advancements.AdvancementType", "CHALLENGE" | "GOAL" | "TASK"> & AdvancementTypeMembers;
export interface AdvancementTypeMembers {
  createAnnouncement(arg0: AdvancementHolder, arg1: j_net_minecraft_server_level.ServerPlayer): j_net_minecraft_network_chat.MutableComponent;
  getChatColor(): j_net_minecraft.ChatFormatting;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getSerializedName(): string;
}
export interface AdvancementTypeStatics {
  readonly CHALLENGE: AdvancementType;
  readonly GOAL: AdvancementType;
  readonly TASK: AdvancementType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [AdvancementType]>;
  valueOf(arg0: string): AdvancementType;
  values(): Array<AdvancementType>;
}

/** JVM class net.minecraft.advancements.CriteriaTriggers. */
export interface CriteriaTriggersMembers {
}
export type CriteriaTriggers = CriteriaTriggersMembers;
export interface CriteriaTriggersStatics {
  new(): CriteriaTriggers;
  readonly ALLAY_DROP_ITEM_ON_BLOCK: j_net_minecraft_advancements_critereon.ItemUsedOnLocationTrigger;
  readonly ANY_BLOCK_USE: j_net_minecraft_advancements_critereon.AnyBlockInteractionTrigger;
  readonly AVOID_VIBRATION: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly BEE_NEST_DESTROYED: j_net_minecraft_advancements_critereon.BeeNestDestroyedTrigger;
  readonly BRED_ANIMALS: j_net_minecraft_advancements_critereon.BredAnimalsTrigger;
  readonly BREWED_POTION: j_net_minecraft_advancements_critereon.BrewedPotionTrigger;
  readonly CHANGED_DIMENSION: j_net_minecraft_advancements_critereon.ChangeDimensionTrigger;
  readonly CHANNELED_LIGHTNING: j_net_minecraft_advancements_critereon.ChanneledLightningTrigger;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CriterionTrigger<object>]>;
  readonly CONSTRUCT_BEACON: j_net_minecraft_advancements_critereon.ConstructBeaconTrigger;
  readonly CONSUME_ITEM: j_net_minecraft_advancements_critereon.ConsumeItemTrigger;
  readonly CRAFTER_RECIPE_CRAFTED: j_net_minecraft_advancements_critereon.RecipeCraftedTrigger;
  readonly CURED_ZOMBIE_VILLAGER: j_net_minecraft_advancements_critereon.CuredZombieVillagerTrigger;
  readonly DEFAULT_BLOCK_USE: j_net_minecraft_advancements_critereon.DefaultBlockInteractionTrigger;
  readonly EFFECTS_CHANGED: j_net_minecraft_advancements_critereon.EffectsChangedTrigger;
  readonly ENCHANTED_ITEM: j_net_minecraft_advancements_critereon.EnchantedItemTrigger;
  readonly ENTER_BLOCK: j_net_minecraft_advancements_critereon.EnterBlockTrigger;
  readonly ENTITY_HURT_PLAYER: j_net_minecraft_advancements_critereon.EntityHurtPlayerTrigger;
  readonly ENTITY_KILLED_PLAYER: j_net_minecraft_advancements_critereon.KilledTrigger;
  readonly FALL_AFTER_EXPLOSION: j_net_minecraft_advancements_critereon.FallAfterExplosionTrigger;
  readonly FALL_FROM_HEIGHT: j_net_minecraft_advancements_critereon.DistanceTrigger;
  readonly FILLED_BUCKET: j_net_minecraft_advancements_critereon.FilledBucketTrigger;
  readonly FISHING_ROD_HOOKED: j_net_minecraft_advancements_critereon.FishingRodHookedTrigger;
  readonly GENERATE_LOOT: j_net_minecraft_advancements_critereon.LootTableTrigger;
  readonly HONEY_BLOCK_SLIDE: j_net_minecraft_advancements_critereon.SlideDownBlockTrigger;
  readonly IMPOSSIBLE: j_net_minecraft_advancements_critereon.ImpossibleTrigger;
  readonly INVENTORY_CHANGED: j_net_minecraft_advancements_critereon.InventoryChangeTrigger;
  readonly ITEM_DURABILITY_CHANGED: j_net_minecraft_advancements_critereon.ItemDurabilityTrigger;
  readonly ITEM_USED_ON_BLOCK: j_net_minecraft_advancements_critereon.ItemUsedOnLocationTrigger;
  readonly KILLED_BY_ARROW: j_net_minecraft_advancements_critereon.KilledByArrowTrigger;
  readonly KILL_MOB_NEAR_SCULK_CATALYST: j_net_minecraft_advancements_critereon.KilledTrigger;
  readonly LEVITATION: j_net_minecraft_advancements_critereon.LevitationTrigger;
  readonly LIGHTNING_STRIKE: j_net_minecraft_advancements_critereon.LightningStrikeTrigger;
  readonly LOCATION: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly NETHER_TRAVEL: j_net_minecraft_advancements_critereon.DistanceTrigger;
  readonly PLACED_BLOCK: j_net_minecraft_advancements_critereon.ItemUsedOnLocationTrigger;
  readonly PLAYER_HURT_ENTITY: j_net_minecraft_advancements_critereon.PlayerHurtEntityTrigger;
  readonly PLAYER_INTERACTED_WITH_ENTITY: j_net_minecraft_advancements_critereon.PlayerInteractTrigger;
  readonly PLAYER_KILLED_ENTITY: j_net_minecraft_advancements_critereon.KilledTrigger;
  readonly PLAYER_SHEARED_EQUIPMENT: j_net_minecraft_advancements_critereon.PlayerInteractTrigger;
  readonly RAID_OMEN: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly RAID_WIN: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly RECIPE_CRAFTED: j_net_minecraft_advancements_critereon.RecipeCraftedTrigger;
  readonly RECIPE_UNLOCKED: j_net_minecraft_advancements_critereon.RecipeUnlockedTrigger;
  readonly RIDE_ENTITY_IN_LAVA_TRIGGER: j_net_minecraft_advancements_critereon.DistanceTrigger;
  readonly SHOT_CROSSBOW: j_net_minecraft_advancements_critereon.ShotCrossbowTrigger;
  readonly SLEPT_IN_BED: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly START_RIDING_TRIGGER: j_net_minecraft_advancements_critereon.StartRidingTrigger;
  readonly SUMMONED_ENTITY: j_net_minecraft_advancements_critereon.SummonedEntityTrigger;
  readonly TAME_ANIMAL: j_net_minecraft_advancements_critereon.TameAnimalTrigger;
  readonly TARGET_BLOCK_HIT: j_net_minecraft_advancements_critereon.TargetBlockTrigger;
  readonly THROWN_ITEM_PICKED_UP_BY_ENTITY: j_net_minecraft_advancements_critereon.PickedUpItemTrigger;
  readonly THROWN_ITEM_PICKED_UP_BY_PLAYER: j_net_minecraft_advancements_critereon.PickedUpItemTrigger;
  readonly TICK: j_net_minecraft_advancements_critereon.PlayerTrigger;
  readonly TRADE: j_net_minecraft_advancements_critereon.TradeTrigger;
  readonly USED_ENDER_EYE: j_net_minecraft_advancements_critereon.UsedEnderEyeTrigger;
  readonly USED_TOTEM: j_net_minecraft_advancements_critereon.UsedTotemTrigger;
  readonly USING_ITEM: j_net_minecraft_advancements_critereon.UsingItemTrigger;
  bootstrap(arg0: j_net_minecraft_core.Registry<CriterionTrigger<object>>): CriterionTrigger<object>;
}

/** JVM record net.minecraft.advancements.Criterion. */
export interface CriterionMembers<T /* extends CriterionTriggerInstance */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  trigger(): CriterionTrigger<T>;
  triggerInstance(): T;
}
export type Criterion<T /* extends CriterionTriggerInstance */ = unknown> = CriterionMembers<T> & JavaOpaque<"java.lang.Record">;
export interface CriterionStatics {
  new<T /* extends CriterionTriggerInstance */>(arg0: CriterionTrigger<T>, arg1: T): Criterion<T>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Criterion<object>]>;
}

/** JVM class net.minecraft.advancements.CriterionProgress. */
export interface CriterionProgressMembers {
  getObtained(): JavaOpaque<"java.time.Instant"> | null;
  grant(): void;
  isDone(): boolean;
  revoke(): void;
  serializeToNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
  toString(): string;
}
export type CriterionProgress = CriterionProgressMembers;
export interface CriterionProgressStatics {
  new(): CriterionProgress;
  new(arg0: JavaOpaque<"java.time.Instant">): CriterionProgress;
  fromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): CriterionProgress;
}

/** JVM interface net.minecraft.advancements.CriterionTrigger. */
export interface CriterionTriggerMembers<T /* extends CriterionTriggerInstance */ = unknown> {
  addPlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: CriterionTrigger_Listener<T>): void;
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  createCriterion(arg0: T): Criterion<T>;
  removePlayerListener(arg0: j_net_minecraft_server.PlayerAdvancements, arg1: CriterionTrigger_Listener<T>): void;
  removePlayerListeners(arg0: j_net_minecraft_server.PlayerAdvancements): void;
}
export type CriterionTrigger<T /* extends CriterionTriggerInstance */ = unknown> = CriterionTriggerMembers<T>;
export interface CriterionTriggerStatics {
}

/** JVM record net.minecraft.advancements.CriterionTrigger$Listener. */
export interface CriterionTrigger_ListenerMembers<T /* extends CriterionTriggerInstance */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  advancement(): AdvancementHolder;
  criterion(): string;
  equals(arg0: object): boolean;
  hashCode(): number;
  run(arg0: j_net_minecraft_server.PlayerAdvancements): void;
  toString(): string;
  trigger(): T;
}
export type CriterionTrigger_Listener<T /* extends CriterionTriggerInstance */ = unknown> = CriterionTrigger_ListenerMembers<T> & JavaOpaque<"java.lang.Record">;
export interface CriterionTrigger_ListenerStatics {
  new<T /* extends CriterionTriggerInstance */>(arg0: T, arg1: AdvancementHolder, arg2: string): CriterionTrigger_Listener<T>;
}

/** JVM interface net.minecraft.advancements.CriterionTriggerInstance. */
export interface CriterionTriggerInstanceMembers {
  validate(arg0: j_net_minecraft_advancements_critereon.CriterionValidator): void;
}
export type CriterionTriggerInstance = CriterionTriggerInstanceMembers;
export interface CriterionTriggerInstanceStatics {
}

/** JVM class net.minecraft.advancements.DisplayInfo. */
export interface DisplayInfoMembers {
  getBackground(): JavaOptional<j_net_minecraft_core.ClientAsset>;
  getDescription(): j_net_minecraft_network_chat.Component;
  getIcon(): j_net_minecraft_world_item.ItemStack;
  getTitle(): j_net_minecraft_network_chat.Component;
  getType(): AdvancementType;
  getX(): number;
  getY(): number;
  isHidden(): boolean;
  readonly paper: JavaOpaque<"io.papermc.paper.advancement.AdvancementDisplay">;
  setLocation(arg0: number, arg1: number): void;
  shouldAnnounceChat(): boolean;
  shouldShowToast(): boolean;
}
export type DisplayInfo = DisplayInfoMembers;
export interface DisplayInfoStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_network_chat.Component, arg2: j_net_minecraft_network_chat.Component, arg3: JavaOptional<j_net_minecraft_core.ClientAsset>, arg4: AdvancementType, arg5: boolean, arg6: boolean, arg7: boolean): DisplayInfo;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DisplayInfo]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DisplayInfo>;
}

/** JVM class net.minecraft.advancements.TreeNodePosition. */
export interface TreeNodePositionMembers {
}
export type TreeNodePosition = TreeNodePositionMembers;
export interface TreeNodePositionStatics {
  new(arg0: AdvancementNode, arg1: TreeNodePosition | null, arg2: TreeNodePosition | null, arg3: number, arg4: number): TreeNodePosition;
  run(arg0: AdvancementNode): void;
}
