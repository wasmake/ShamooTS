// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM abstract net.minecraft.world.BossEvent. */
export interface BossEventMembers {
  adventure: JavaOpaque<"net.kyori.adventure.bossbar.BossBar">;
  color: BossEvent_BossBarColor;
  createWorldFog: boolean;
  darkenScreen: boolean;
  getColor(): BossEvent_BossBarColor;
  getId(): JavaOpaque<"java.util.UUID">;
  getName(): j_net_minecraft_network_chat.Component;
  getOverlay(): BossEvent_BossBarOverlay;
  getProgress(): number;
  name: j_net_minecraft_network_chat.Component;
  overlay: BossEvent_BossBarOverlay;
  playBossMusic: boolean;
  progress: number;
  setColor(arg0: BossEvent_BossBarColor): void;
  setCreateWorldFog(arg0: boolean): BossEvent;
  setDarkenScreen(arg0: boolean): BossEvent;
  setName(arg0: j_net_minecraft_network_chat.Component): void;
  setOverlay(arg0: BossEvent_BossBarOverlay): void;
  setPlayBossMusic(arg0: boolean): BossEvent;
  setProgress(arg0: number): void;
  shouldCreateWorldFog(): boolean;
  shouldDarkenScreen(): boolean;
  shouldPlayBossMusic(): boolean;
}
export type BossEvent = BossEventMembers;
export interface BossEventStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: j_net_minecraft_network_chat.Component, arg2: BossEvent_BossBarColor, arg3: BossEvent_BossBarOverlay): BossEvent;
}

/** Live JVM enum net.minecraft.world.BossEvent$BossBarColor; constants are host handles, not strings. */
export type BossEvent_BossBarColor = JavaEnum<"net.minecraft.world.BossEvent$BossBarColor", "BLUE" | "GREEN" | "PINK" | "PURPLE" | "RED" | "WHITE" | "YELLOW"> & BossEvent_BossBarColorMembers;
export interface BossEvent_BossBarColorMembers {
  getFormatting(): j_net_minecraft.ChatFormatting;
  getName(): string;
  getSerializedName(): string;
}
export interface BossEvent_BossBarColorStatics {
  readonly BLUE: BossEvent_BossBarColor;
  readonly GREEN: BossEvent_BossBarColor;
  readonly PINK: BossEvent_BossBarColor;
  readonly PURPLE: BossEvent_BossBarColor;
  readonly RED: BossEvent_BossBarColor;
  readonly WHITE: BossEvent_BossBarColor;
  readonly YELLOW: BossEvent_BossBarColor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BossEvent_BossBarColor]>;
  valueOf(arg0: string): BossEvent_BossBarColor;
  values(): Array<BossEvent_BossBarColor>;
}

/** Live JVM enum net.minecraft.world.BossEvent$BossBarOverlay; constants are host handles, not strings. */
export type BossEvent_BossBarOverlay = JavaEnum<"net.minecraft.world.BossEvent$BossBarOverlay", "NOTCHED_10" | "NOTCHED_12" | "NOTCHED_20" | "NOTCHED_6" | "PROGRESS"> & BossEvent_BossBarOverlayMembers;
export interface BossEvent_BossBarOverlayMembers {
  getName(): string;
  getSerializedName(): string;
}
export interface BossEvent_BossBarOverlayStatics {
  readonly NOTCHED_10: BossEvent_BossBarOverlay;
  readonly NOTCHED_12: BossEvent_BossBarOverlay;
  readonly NOTCHED_20: BossEvent_BossBarOverlay;
  readonly NOTCHED_6: BossEvent_BossBarOverlay;
  readonly PROGRESS: BossEvent_BossBarOverlay;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BossEvent_BossBarOverlay]>;
  valueOf(arg0: string): BossEvent_BossBarOverlay;
  values(): Array<BossEvent_BossBarOverlay>;
}

/** JVM interface net.minecraft.world.Clearable. */
export interface ClearableMembers {
  clearContent(): void;
}
export type Clearable = ClearableMembers;
export interface ClearableStatics {
}

/** JVM class net.minecraft.world.CompoundContainer. */
export interface CompoundContainerMembers {
  readonly __javaSupertypes?: readonly [Container];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  clearContent(): void;
  readonly container1: Container;
  readonly container2: Container;
  contains(arg0: Container): boolean;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type CompoundContainer = CompoundContainerMembers & Container;
export interface CompoundContainerStatics {
  new(arg0: Container, arg1: Container): CompoundContainer;
}

/** JVM interface net.minecraft.world.Container. */
export interface ContainerMembers {
  readonly __javaSupertypes?: readonly [Clearable, Iterable<j_net_minecraft_world_item.ItemStack>];
  canPlaceItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canTakeItem(arg0: Container, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  countItem(arg0: j_net_minecraft_world_item.Item): number;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getMaxStackSize(arg0: j_net_minecraft_world_item.ItemStack): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  hasAnyMatching(arg0: JavaPredicate<j_net_minecraft_world_item.ItemStack>): boolean;
  hasAnyOf(arg0: JavaSet<j_net_minecraft_world_item.Item>): boolean;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [j_net_minecraft_world_item.ItemStack]>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  startOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  stopOpen(arg0: j_net_minecraft_world_entity_player.Player): void;
}
export type Container = ContainerMembers & Clearable & Iterable<j_net_minecraft_world_item.ItemStack>;
export interface ContainerStatics {
  readonly DEFAULT_DISTANCE_BUFFER: 4;
  readonly MAX_STACK: 99;
  stillValidBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity, arg1: j_net_minecraft_world_entity_player.Player): boolean;
  stillValidBlockEntity(arg0: j_net_minecraft_world_level_block_entity.BlockEntity, arg1: j_net_minecraft_world_entity_player.Player, arg2: number): boolean;
}

/** JVM class net.minecraft.world.Container$ContainerIterator. */
export interface Container_ContainerIteratorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Iterator", [j_net_minecraft_world_item.ItemStack]>];
  hasNext(): boolean;
  next(): object;
  next(): j_net_minecraft_world_item.ItemStack;
}
export type Container_ContainerIterator = Container_ContainerIteratorMembers & JavaOpaque<"java.util.Iterator", [j_net_minecraft_world_item.ItemStack]>;
export interface Container_ContainerIteratorStatics {
  new(arg0: Container): Container_ContainerIterator;
}

/** JVM class net.minecraft.world.ContainerHelper. */
export interface ContainerHelperMembers {
}
export type ContainerHelper = ContainerHelperMembers;
export interface ContainerHelperStatics {
  new(): ContainerHelper;
  readonly TAG_ITEMS: "Items";
  clearOrCountMatchingItems(arg0: Container, arg1: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg2: number, arg3: boolean): number;
  clearOrCountMatchingItems(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg2: number, arg3: boolean): number;
  loadAllItems(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>): void;
  removeItem(arg0: JavaList<j_net_minecraft_world_item.ItemStack>, arg1: number, arg2: number): j_net_minecraft_world_item.ItemStack;
  saveAllItems(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>): void;
  saveAllItems(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>, arg2: boolean): void;
  takeItem(arg0: JavaList<j_net_minecraft_world_item.ItemStack>, arg1: number): j_net_minecraft_world_item.ItemStack;
}

/** JVM interface net.minecraft.world.ContainerListener. */
export interface ContainerListenerMembers {
  containerChanged(arg0: Container): void;
}
export type ContainerListener = ContainerListenerMembers;
export interface ContainerListenerStatics {
}

/** JVM class net.minecraft.world.Containers. */
export interface ContainersMembers {
}
export type Containers = ContainersMembers;
export interface ContainersStatics {
  new(): Containers;
  dropContents(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>): void;
  dropContents(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: Container): void;
  dropContents(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.Entity, arg2: Container): void;
  dropItemStack(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: j_net_minecraft_world_item.ItemStack): void;
  updateNeighboursAfterDestroy(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_core.BlockPos): void;
}

/** Live JVM enum net.minecraft.world.Difficulty; constants are host handles, not strings. */
export type Difficulty = JavaEnum<"net.minecraft.world.Difficulty", "EASY" | "HARD" | "NORMAL" | "PEACEFUL"> & DifficultyMembers;
export interface DifficultyMembers {
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getId(): number;
  getInfo(): j_net_minecraft_network_chat.Component;
  getKey(): string;
  getSerializedName(): string;
}
export interface DifficultyStatics {
  readonly EASY: Difficulty;
  readonly HARD: Difficulty;
  readonly NORMAL: Difficulty;
  readonly PEACEFUL: Difficulty;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<Difficulty>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Difficulty>;
  byId(arg0: number): Difficulty;
  byName(arg0: string): Difficulty | null;
  valueOf(arg0: string): Difficulty;
  values(): Array<Difficulty>;
}

/** JVM class net.minecraft.world.DifficultyInstance. */
export interface DifficultyInstanceMembers {
  getDifficulty(): Difficulty;
  getEffectiveDifficulty(): number;
  getSpecialMultiplier(): number;
  isHard(): boolean;
  isHarderThan(arg0: number): boolean;
}
export type DifficultyInstance = DifficultyInstanceMembers;
export interface DifficultyInstanceStatics {
  new(arg0: Difficulty, arg1: bigint, arg2: bigint, arg3: number): DifficultyInstance;
}

/** Live JVM enum net.minecraft.world.InteractionHand; constants are host handles, not strings. */
export type InteractionHand = JavaEnum<"net.minecraft.world.InteractionHand", "MAIN_HAND" | "OFF_HAND"> & InteractionHandMembers;
export interface InteractionHandMembers {
}
export interface InteractionHandStatics {
  readonly MAIN_HAND: InteractionHand;
  readonly OFF_HAND: InteractionHand;
  valueOf(arg0: string): InteractionHand;
  values(): Array<InteractionHand>;
}

/** JVM interface net.minecraft.world.InteractionResult. */
export interface InteractionResultMembers {
  consumesAction(): boolean;
}
export type InteractionResult = InteractionResultMembers;
export interface InteractionResultStatics {
  readonly CONSUME: InteractionResult_Success;
  readonly FAIL: InteractionResult_Fail;
  readonly PASS: InteractionResult_Pass;
  readonly SUCCESS: InteractionResult_Success;
  readonly SUCCESS_SERVER: InteractionResult_Success;
  readonly TRY_WITH_EMPTY_HAND: InteractionResult_TryEmptyHandInteraction;
}

/** JVM record net.minecraft.world.InteractionResult$Fail. */
export interface InteractionResult_FailMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InteractionResult];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type InteractionResult_Fail = InteractionResult_FailMembers & JavaOpaque<"java.lang.Record"> & InteractionResult;
export interface InteractionResult_FailStatics {
  new(): InteractionResult_Fail;
}

/** JVM record net.minecraft.world.InteractionResult$ItemContext. */
export interface InteractionResult_ItemContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  heldItemTransformedTo(): j_net_minecraft_world_item.ItemStack | null;
  toString(): string;
  wasItemInteraction(): boolean;
}
export type InteractionResult_ItemContext = InteractionResult_ItemContextMembers & JavaOpaque<"java.lang.Record">;
export interface InteractionResult_ItemContextStatics {
  new(arg0: boolean, arg1: j_net_minecraft_world_item.ItemStack | null): InteractionResult_ItemContext;
}

/** JVM record net.minecraft.world.InteractionResult$PaperSuccessContext. */
export interface InteractionResult_PaperSuccessContextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  placedBlockAt(arg0: j_net_minecraft_core.BlockPos): InteractionResult_PaperSuccessContext;
  placedBlockPosition(): j_net_minecraft_core.BlockPos | null;
  toString(): string;
}
export type InteractionResult_PaperSuccessContext = InteractionResult_PaperSuccessContextMembers & JavaOpaque<"java.lang.Record">;
export interface InteractionResult_PaperSuccessContextStatics {
  new(arg0: j_net_minecraft_core.BlockPos): InteractionResult_PaperSuccessContext;
}

/** JVM record net.minecraft.world.InteractionResult$Pass. */
export interface InteractionResult_PassMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InteractionResult];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type InteractionResult_Pass = InteractionResult_PassMembers & JavaOpaque<"java.lang.Record"> & InteractionResult;
export interface InteractionResult_PassStatics {
  new(): InteractionResult_Pass;
}

/** JVM record net.minecraft.world.InteractionResult$Success. */
export interface InteractionResult_SuccessMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InteractionResult];
  configurePaper(arg0: JavaOpaque<"java.util.function.UnaryOperator", [InteractionResult_PaperSuccessContext]>): InteractionResult_Success;
  consumesAction(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  heldItemTransformedTo(): j_net_minecraft_world_item.ItemStack | null;
  heldItemTransformedTo(arg0: j_net_minecraft_world_item.ItemStack): InteractionResult_Success;
  itemContext(): InteractionResult_ItemContext;
  paperSuccessContext(): InteractionResult_PaperSuccessContext;
  swingSource(): InteractionResult_SwingSource;
  toString(): string;
  wasItemInteraction(): boolean;
  withoutItem(): InteractionResult_Success;
}
export type InteractionResult_Success = InteractionResult_SuccessMembers & JavaOpaque<"java.lang.Record"> & InteractionResult;
export interface InteractionResult_SuccessStatics {
  new(arg0: InteractionResult_SwingSource, arg1: InteractionResult_ItemContext): InteractionResult_Success;
  new(arg0: InteractionResult_SwingSource, arg1: InteractionResult_ItemContext, arg2: InteractionResult_PaperSuccessContext): InteractionResult_Success;
}

/** Live JVM enum net.minecraft.world.InteractionResult$SwingSource; constants are host handles, not strings. */
export type InteractionResult_SwingSource = JavaEnum<"net.minecraft.world.InteractionResult$SwingSource", "CLIENT" | "NONE" | "SERVER"> & InteractionResult_SwingSourceMembers;
export interface InteractionResult_SwingSourceMembers {
}
export interface InteractionResult_SwingSourceStatics {
  readonly CLIENT: InteractionResult_SwingSource;
  readonly NONE: InteractionResult_SwingSource;
  readonly SERVER: InteractionResult_SwingSource;
  valueOf(arg0: string): InteractionResult_SwingSource;
  values(): Array<InteractionResult_SwingSource>;
}

/** JVM record net.minecraft.world.InteractionResult$TryEmptyHandInteraction. */
export interface InteractionResult_TryEmptyHandInteractionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, InteractionResult];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type InteractionResult_TryEmptyHandInteraction = InteractionResult_TryEmptyHandInteractionMembers & JavaOpaque<"java.lang.Record"> & InteractionResult;
export interface InteractionResult_TryEmptyHandInteractionStatics {
  new(): InteractionResult_TryEmptyHandInteraction;
}

/** JVM record net.minecraft.world.ItemStackWithSlot. */
export interface ItemStackWithSlotMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isValidInContainer(arg0: number): boolean;
  slot(): number;
  stack(): j_net_minecraft_world_item.ItemStack;
  toString(): string;
}
export type ItemStackWithSlot = ItemStackWithSlotMembers & JavaOpaque<"java.lang.Record">;
export interface ItemStackWithSlotStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): ItemStackWithSlot;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemStackWithSlot]>;
}

/** JVM record net.minecraft.world.LockCode. */
export interface LockCodeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  addToTag(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  predicate(): j_net_minecraft_advancements_critereon.ItemPredicate;
  toString(): string;
  unlocksWith(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type LockCode = LockCodeMembers & JavaOpaque<"java.lang.Record">;
export interface LockCodeStatics {
  new(arg0: j_net_minecraft_advancements_critereon.ItemPredicate): LockCode;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LockCode]>;
  readonly NO_LOCK: LockCode;
  readonly TAG_LOCK: "lock";
  fromTag(arg0: j_net_minecraft_world_level_storage.ValueInput): LockCode;
}

/** JVM interface net.minecraft.world.MenuProvider. */
export interface MenuProviderMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_inventory.MenuConstructor];
  getDisplayName(): j_net_minecraft_network_chat.Component;
}
export type MenuProvider = MenuProviderMembers & j_net_minecraft_world_inventory.MenuConstructor;
export interface MenuProviderStatics {
}

/** JVM interface net.minecraft.world.Nameable. */
export interface NameableMembers {
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getName(): j_net_minecraft_network_chat.Component;
  hasCustomName(): boolean;
}
export type Nameable = NameableMembers;
export interface NameableStatics {
}

/** JVM interface net.minecraft.world.RandomizableContainer. */
export interface RandomizableContainerMembers {
  readonly __javaSupertypes?: readonly [Container];
  getBlockPos(): j_net_minecraft_core.BlockPos;
  getLevel(): j_net_minecraft_world_level.Level | null;
  getLootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null;
  getLootTableSeed(): bigint;
  getLootableInventory(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventory">;
  lootableData(): JavaOpaque<"com.destroystokyo.paper.loottable.PaperLootableInventoryData"> | null;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null): void | null;
  setLootTable(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable> | null, arg1: bigint): void | null;
  setLootTableSeed(arg0: bigint): void;
  tryLoadLootTable(arg0: j_net_minecraft_world_level_storage.ValueInput): boolean;
  trySaveLootTable(arg0: j_net_minecraft_world_level_storage.ValueOutput): boolean;
  unpackLootTable(arg0: j_net_minecraft_world_entity_player.Player | null): void | null;
  unpackLootTable(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: boolean): void | null;
}
export type RandomizableContainer = RandomizableContainerMembers & Container;
export interface RandomizableContainerStatics {
  readonly LOOT_TABLE_SEED_TAG: "LootTableSeed";
  readonly LOOT_TABLE_TAG: "LootTable";
  setBlockEntityLootTable(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>): void;
}

/** JVM class net.minecraft.world.RandomSequence. */
export interface RandomSequenceMembers {
  random(): j_net_minecraft_util.RandomSource;
}
export type RandomSequence = RandomSequenceMembers;
export interface RandomSequenceStatics {
  new(arg0: bigint, arg1: JavaOptional<j_net_minecraft_resources.ResourceLocation>): RandomSequence;
  new(arg0: bigint, arg1: j_net_minecraft_resources.ResourceLocation): RandomSequence;
  new(arg0: j_net_minecraft_world_level_levelgen.XoroshiroRandomSource): RandomSequence;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [RandomSequence]>;
  seedForKey(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_world_level_levelgen.RandomSupport_Seed128bit;
}

/** JVM class net.minecraft.world.RandomSequences. */
export interface RandomSequencesMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  clear(): number;
  forAllSequences(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceLocation, RandomSequence>): void;
  get(arg0: j_net_minecraft_resources.ResourceLocation): j_net_minecraft_util.RandomSource;
  reset(arg0: j_net_minecraft_resources.ResourceLocation): void;
  reset(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number, arg2: boolean, arg3: boolean): void;
  setSeedDefaults(arg0: number, arg1: boolean, arg2: boolean): void;
}
export type RandomSequences = RandomSequencesMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface RandomSequencesStatics {
  new(arg0: bigint): RandomSequences;
  readonly TYPE: j_net_minecraft_world_level_saveddata.SavedDataType<RandomSequences>;
  codec(arg0: bigint): JavaOpaque<"com.mojang.serialization.Codec", [RandomSequences]>;
}

/** JVM class net.minecraft.world.SimpleContainer. */
export interface SimpleContainerMembers {
  readonly __javaSupertypes?: readonly [Container, j_net_minecraft_world_inventory.StackedContentsCompatible];
  addItem(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  addListener(arg0: ContainerListener): void;
  bukkitOwner: JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  canAddItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  clearContent(): void;
  fillStackedContents(arg0: j_net_minecraft_world_entity_player.StackedItemContents): void;
  fromItemList(arg0: j_net_minecraft_world_level_storage.ValueInput_TypedInputList<j_net_minecraft_world_item.ItemStack>): void;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getItems(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getLocation(): JavaOpaque<"org.bukkit.Location"> | null;
  getMaxStackSize(): number;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  readonly items: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  removeAllItems(): JavaList<j_net_minecraft_world_item.ItemStack>;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  removeItemType(arg0: j_net_minecraft_world_item.Item, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeListener(arg0: ContainerListener): void;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  stillValid(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  storeAsItemList(arg0: j_net_minecraft_world_level_storage.ValueOutput_TypedOutputList<j_net_minecraft_world_item.ItemStack>): void;
  toString(): string;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type SimpleContainer = SimpleContainerMembers & Container & j_net_minecraft_world_inventory.StackedContentsCompatible;
export interface SimpleContainerStatics {
  new(arg0: number): SimpleContainer;
  new(arg0: number, arg1: JavaOpaque<"org.bukkit.inventory.InventoryHolder"> | null): SimpleContainer;
  new(arg0: JavaSupplier<JavaOpaque<"org.bukkit.inventory.InventoryHolder">>, arg1: number): SimpleContainer;
  new(arg0: SimpleContainer): SimpleContainer;
  new(...arg0: Array<j_net_minecraft_world_item.ItemStack>): SimpleContainer;
}

/** JVM class net.minecraft.world.SimpleMenuProvider. */
export interface SimpleMenuProviderMembers {
  readonly __javaSupertypes?: readonly [MenuProvider];
  createMenu(arg0: number, arg1: j_net_minecraft_world_entity_player.Inventory, arg2: j_net_minecraft_world_entity_player.Player): j_net_minecraft_world_inventory.AbstractContainerMenu;
  getDisplayName(): j_net_minecraft_network_chat.Component;
}
export type SimpleMenuProvider = SimpleMenuProviderMembers & MenuProvider;
export interface SimpleMenuProviderStatics {
  new(arg0: j_net_minecraft_world_inventory.MenuConstructor, arg1: j_net_minecraft_network_chat.Component): SimpleMenuProvider;
}

/** JVM class net.minecraft.world.TickRateManager. */
export interface TickRateManagerMembers {
  frozenTicksToRun: (number) & { (): number };
  isEntityFrozen(arg0: j_net_minecraft_world_entity.Entity): boolean;
  isFrozen: (boolean) & { (): boolean };
  isSteppingForward(): boolean;
  millisecondsPerTick(): number;
  nanosecondsPerTick: (bigint) & { (): bigint };
  runGameElements: boolean;
  runsNormally(): boolean;
  setFrozen(arg0: boolean): void;
  setFrozenTicksToRun(arg0: number): void;
  setTickRate(arg0: number): void;
  tick(): void;
  tickrate: (number) & { (): number };
}
export type TickRateManager = TickRateManagerMembers;
export interface TickRateManagerStatics {
  new(): TickRateManager;
  readonly MIN_TICKRATE: 1;
}

/** JVM interface net.minecraft.world.WorldlyContainer. */
export interface WorldlyContainerMembers {
  readonly __javaSupertypes?: readonly [Container];
  canPlaceItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction | null): boolean | null;
  canTakeItemThroughFace(arg0: number, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.Direction): boolean;
  getSlotsForFace(arg0: j_net_minecraft_core.Direction): Array<number>;
}
export type WorldlyContainer = WorldlyContainerMembers & Container;
export interface WorldlyContainerStatics {
}

/** JVM interface net.minecraft.world.WorldlyContainerHolder. */
export interface WorldlyContainerHolderMembers {
  getContainer(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: j_net_minecraft_core.BlockPos): WorldlyContainer;
}
export type WorldlyContainerHolder = WorldlyContainerHolderMembers;
export interface WorldlyContainerHolderStatics {
}
