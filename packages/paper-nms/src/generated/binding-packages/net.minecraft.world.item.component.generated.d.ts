// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_network from './net.minecraft.server.network.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_inventory_tooltip from './net.minecraft.world.inventory.tooltip.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_consume_effects from './net.minecraft.world.item.consume_effects.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';

/** JVM record net.minecraft.world.item.component.Bees. */
export interface BeesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  bees(): JavaList<j_net_minecraft_world_level_block_entity.BeehiveBlockEntity_Occupant>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type Bees = BeesMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface BeesStatics {
  new(arg0: JavaList<j_net_minecraft_world_level_block_entity.BeehiveBlockEntity_Occupant>): Bees;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Bees]>;
  readonly EMPTY: Bees;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Bees>;
}

/** JVM record net.minecraft.world.item.component.BlockItemStateProperties. */
export interface BlockItemStatePropertiesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  apply(arg0: j_net_minecraft_world_level_block_state.BlockState): j_net_minecraft_world_level_block_state.BlockState;
  equals(arg0: object): boolean;
  get<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>): T | null;
  hashCode(): number;
  isEmpty(): boolean;
  properties(): JavaMap<string, string>;
  toString(): string;
  with<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: T): BlockItemStateProperties;
  with<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_world_level_block_state_properties.Property<T>, arg1: j_net_minecraft_world_level_block_state.BlockState): BlockItemStateProperties;
}
export type BlockItemStateProperties = BlockItemStatePropertiesMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface BlockItemStatePropertiesStatics {
  new(arg0: JavaMap<string, string>): BlockItemStateProperties;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockItemStateProperties]>;
  readonly EMPTY: BlockItemStateProperties;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlockItemStateProperties>;
}

/** JVM record net.minecraft.world.item.component.BlocksAttacks. */
export interface BlocksAttacksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockDelaySeconds(): number;
  blockDelayTicks(): number;
  blockSound(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  bypassedBy(): JavaOptional<j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>>;
  damageReductions(): JavaList<BlocksAttacks_DamageReduction>;
  disable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: number, arg3: j_net_minecraft_world_item.ItemStack, arg4: j_net_minecraft_world_entity.LivingEntity): void;
  disableCooldownScale(): number;
  disableSound(): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  hurtBlockingItem(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity.LivingEntity, arg3: j_net_minecraft_world.InteractionHand, arg4: number): void;
  itemDamage(): BlocksAttacks_ItemDamageFunction;
  onBlocked(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  resolveBlockedDamage(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number, arg2: number): number;
  toString(): string;
}
export type BlocksAttacks = BlocksAttacksMembers & JavaOpaque<"java.lang.Record">;
export interface BlocksAttacksStatics {
  new(arg0: number, arg1: number, arg2: JavaList<BlocksAttacks_DamageReduction>, arg3: BlocksAttacks_ItemDamageFunction, arg4: JavaOptional<j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>>, arg5: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>, arg6: JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>): BlocksAttacks;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlocksAttacks]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BlocksAttacks>;
}

/** JVM record net.minecraft.world.item.component.BlocksAttacks$DamageReduction. */
export interface BlocksAttacks_DamageReductionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  base(): number;
  equals(arg0: object): boolean;
  factor(): number;
  hashCode(): number;
  horizontalBlockingAngle(): number;
  resolve(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number, arg2: number): number;
  toString(): string;
  type(): JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_damagesource.DamageType>>;
}
export type BlocksAttacks_DamageReduction = BlocksAttacks_DamageReductionMembers & JavaOpaque<"java.lang.Record">;
export interface BlocksAttacks_DamageReductionStatics {
  new(arg0: number, arg1: JavaOptional<j_net_minecraft_core.HolderSet<j_net_minecraft_world_damagesource.DamageType>>, arg2: number, arg3: number): BlocksAttacks_DamageReduction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlocksAttacks_DamageReduction]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BlocksAttacks_DamageReduction>;
}

/** JVM record net.minecraft.world.item.component.BlocksAttacks$ItemDamageFunction. */
export interface BlocksAttacks_ItemDamageFunctionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  apply(arg0: number): number;
  base(): number;
  equals(arg0: object): boolean;
  factor(): number;
  hashCode(): number;
  threshold(): number;
  toString(): string;
}
export type BlocksAttacks_ItemDamageFunction = BlocksAttacks_ItemDamageFunctionMembers & JavaOpaque<"java.lang.Record">;
export interface BlocksAttacks_ItemDamageFunctionStatics {
  new(arg0: number, arg1: number, arg2: number): BlocksAttacks_ItemDamageFunction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlocksAttacks_ItemDamageFunction]>;
  readonly DEFAULT: BlocksAttacks_ItemDamageFunction;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, BlocksAttacks_ItemDamageFunction>;
}

/** JVM interface net.minecraft.world.item.component.BookContent. */
export interface BookContentMembers<T = unknown, C = unknown> {
  pages(): JavaList<j_net_minecraft_server_network.Filterable<T>>;
  withReplacedPages(arg0: JavaList<j_net_minecraft_server_network.Filterable<T>>): C;
}
export type BookContent<T = unknown, C = unknown> = BookContentMembers<T, C>;
export interface BookContentStatics {
}

/** JVM class net.minecraft.world.item.component.BundleContents. */
export interface BundleContentsMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_inventory_tooltip.TooltipComponent];
  equals(arg0: object): boolean;
  getItemUnsafe(arg0: number): j_net_minecraft_world_item.ItemStack;
  getMaxAmountToAdd(arg0: j_net_minecraft_world_item.ItemStack): number;
  getNumberOfItemsToShow(): number;
  getSelectedItem(): number;
  hasSelectedItem(): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  itemCopyStream(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>;
  items(): Iterable<j_net_minecraft_world_item.ItemStack>;
  itemsCopy(): Iterable<j_net_minecraft_world_item.ItemStack>;
  size(): number;
  toString(): string;
  weight(): JavaOpaque<"org.apache.commons.lang3.math.Fraction">;
}
export type BundleContents = BundleContentsMembers & j_net_minecraft_world_inventory_tooltip.TooltipComponent;
export interface BundleContentsStatics {
  new(arg0: JavaList<j_net_minecraft_world_item.ItemStack>): BundleContents;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BundleContents]>;
  readonly EMPTY: BundleContents;
  readonly NO_SELECTED_ITEM_INDEX: -1;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, BundleContents>;
  canItemBeInBundle(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}

/** JVM class net.minecraft.world.item.component.BundleContents$Mutable. */
export interface BundleContents_MutableMembers {
  clearItems(): BundleContents_Mutable;
  getMaxAmountToAdd(arg0: j_net_minecraft_world_item.ItemStack): number;
  removeOne(): j_net_minecraft_world_item.ItemStack | null;
  toImmutable(): BundleContents;
  toggleSelectedItem(arg0: number): void;
  tryInsert(arg0: j_net_minecraft_world_item.ItemStack): number;
  tryTransfer(arg0: j_net_minecraft_world_inventory.Slot, arg1: j_net_minecraft_world_entity_player.Player): number;
  weight(): JavaOpaque<"org.apache.commons.lang3.math.Fraction">;
}
export type BundleContents_Mutable = BundleContents_MutableMembers;
export interface BundleContents_MutableStatics {
  new(arg0: BundleContents): BundleContents_Mutable;
}

/** JVM class net.minecraft.world.item.component.ChargedProjectiles. */
export interface ChargedProjectilesMembers {
  readonly __javaSupertypes?: readonly [TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  contains(arg0: j_net_minecraft_world_item.Item): boolean;
  equals(arg0: object): boolean;
  getItems(): JavaList<j_net_minecraft_world_item.ItemStack>;
  hashCode(): number;
  isEmpty(): boolean;
  toString(): string;
}
export type ChargedProjectiles = ChargedProjectilesMembers & TooltipProvider;
export interface ChargedProjectilesStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ChargedProjectiles]>;
  readonly EMPTY: ChargedProjectiles;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ChargedProjectiles>;
  of(arg0: JavaList<j_net_minecraft_world_item.ItemStack>): ChargedProjectiles;
  of(arg0: j_net_minecraft_world_item.ItemStack): ChargedProjectiles;
}

/** JVM record net.minecraft.world.item.component.Consumable. */
export interface ConsumableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  animation(): j_net_minecraft_world_item.ItemUseAnimation;
  canConsume(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  cancelUsingItem(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack): void;
  consumeSeconds(): number;
  consumeTicks(): number;
  emitParticlesAndSounds(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: number): void;
  equals(arg0: object): boolean;
  hasConsumeParticles(): boolean;
  hashCode(): number;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  onConsumeEffects(): JavaList<j_net_minecraft_world_item_consume_effects.ConsumeEffect>;
  shouldEmitParticlesAndSounds(arg0: number): boolean;
  sound(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  startConsuming(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  toString(): string;
}
export type Consumable = ConsumableMembers & JavaOpaque<"java.lang.Record">;
export interface ConsumableStatics {
  new(arg0: number, arg1: j_net_minecraft_world_item.ItemUseAnimation, arg2: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>, arg3: boolean, arg4: JavaList<j_net_minecraft_world_item_consume_effects.ConsumeEffect>): Consumable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Consumable]>;
  readonly DEFAULT_CONSUME_SECONDS: 1.6;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Consumable>;
  builder(): Consumable_Builder;
}

/** JVM class net.minecraft.world.item.component.Consumable$Builder. */
export interface Consumable_BuilderMembers {
  animation(arg0: j_net_minecraft_world_item.ItemUseAnimation): Consumable_Builder;
  build(): Consumable;
  consumeSeconds(arg0: number): Consumable_Builder;
  hasConsumeParticles(arg0: boolean): Consumable_Builder;
  onConsume(arg0: j_net_minecraft_world_item_consume_effects.ConsumeEffect): Consumable_Builder;
  sound(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): Consumable_Builder;
  soundAfterConsume(arg0: j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>): Consumable_Builder;
}
export type Consumable_Builder = Consumable_BuilderMembers;
export interface Consumable_BuilderStatics {
}

/** JVM interface net.minecraft.world.item.component.Consumable$OverrideConsumeSound. */
export interface Consumable_OverrideConsumeSoundMembers {
  getConsumeSound(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_sounds.SoundEvent;
}
export type Consumable_OverrideConsumeSound = Consumable_OverrideConsumeSoundMembers;
export interface Consumable_OverrideConsumeSoundStatics {
}

/** JVM interface net.minecraft.world.item.component.ConsumableListener. */
export interface ConsumableListenerMembers {
  cancelUsingItem(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaList<j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>>): void;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: Consumable): void;
}
export type ConsumableListener = ConsumableListenerMembers;
export interface ConsumableListenerStatics {
}

/** JVM class net.minecraft.world.item.component.Consumables. */
export interface ConsumablesMembers {
}
export type Consumables = ConsumablesMembers;
export interface ConsumablesStatics {
  new(): Consumables;
  readonly CHICKEN: Consumable;
  readonly CHORUS_FRUIT: Consumable;
  readonly DEFAULT_DRINK: Consumable;
  readonly DEFAULT_FOOD: Consumable;
  readonly DRIED_KELP: Consumable;
  readonly ENCHANTED_GOLDEN_APPLE: Consumable;
  readonly GOLDEN_APPLE: Consumable;
  readonly HONEY_BOTTLE: Consumable;
  readonly MILK_BUCKET: Consumable;
  readonly OMINOUS_BOTTLE: Consumable;
  readonly POISONOUS_POTATO: Consumable;
  readonly PUFFERFISH: Consumable;
  readonly ROTTEN_FLESH: Consumable;
  readonly SPIDER_EYE: Consumable;
  defaultDrink(): Consumable_Builder;
  defaultFood(): Consumable_Builder;
}

/** JVM class net.minecraft.world.item.component.CustomData. */
export interface CustomDataMembers {
  contains(arg0: string): boolean;
  copyTag(): j_net_minecraft_nbt.CompoundTag;
  equals(arg0: object): boolean;
  getUnsafe(): j_net_minecraft_nbt.CompoundTag;
  hashCode(): number;
  isEmpty(): boolean;
  loadInto(arg0: j_net_minecraft_world_entity.Entity): void;
  loadInto(arg0: j_net_minecraft_world_level_block_entity.BlockEntity, arg1: j_net_minecraft_core.HolderLookup_Provider): boolean;
  matchedBy(arg0: j_net_minecraft_nbt.CompoundTag): boolean;
  parseEntityId(): j_net_minecraft_resources.ResourceLocation | null;
  parseEntityType<T>(arg0: j_net_minecraft_core.HolderLookup_Provider, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): T | null;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: JavaOpaque<"com.mojang.serialization.MapDecoder", [T]>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  read<T>(arg0: JavaOpaque<"com.mojang.serialization.MapDecoder", [T]>): JavaOpaque<"com.mojang.serialization.DataResult", [T]>;
  size(): number;
  toString(): string;
  update<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: JavaOpaque<"com.mojang.serialization.MapEncoder", [T]>, arg2: T): JavaOpaque<"com.mojang.serialization.DataResult", [CustomData]>;
  update(arg0: JavaConsumer<j_net_minecraft_nbt.CompoundTag>): CustomData;
}
export type CustomData = CustomDataMembers;
export interface CustomDataStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CustomData]>;
  readonly CODEC_WITH_ID: JavaOpaque<"com.mojang.serialization.Codec", [CustomData]>;
  readonly EMPTY: CustomData;
  readonly SERIALIZE_CUSTOM_AS_SNBT: JavaOpaque<"java.lang.ThreadLocal", [boolean]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, CustomData>;
  of(arg0: j_net_minecraft_nbt.CompoundTag): CustomData;
  set(arg0: j_net_minecraft_core_component.DataComponentType<CustomData>, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_nbt.CompoundTag): void;
  update(arg0: j_net_minecraft_core_component.DataComponentType<CustomData>, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaConsumer<j_net_minecraft_nbt.CompoundTag>): void;
}

/** JVM record net.minecraft.world.item.component.CustomModelData. */
export interface CustomModelDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  colors(): JavaList<number>;
  equals(arg0: object): boolean;
  flags(): JavaList<boolean>;
  floats(): JavaList<number>;
  getBoolean(arg0: number): boolean | null;
  getColor(arg0: number): number | null;
  getFloat(arg0: number): number | null;
  getString(arg0: number): string | null;
  hashCode(): number;
  strings(): JavaList<string>;
  toString(): string;
}
export type CustomModelData = CustomModelDataMembers & JavaOpaque<"java.lang.Record">;
export interface CustomModelDataStatics {
  new(arg0: JavaList<number>, arg1: JavaList<boolean>, arg2: JavaList<string>, arg3: JavaList<number>): CustomModelData;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [CustomModelData]>;
  readonly EMPTY: CustomModelData;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, CustomModelData>;
}

/** JVM record net.minecraft.world.item.component.DamageResistant. */
export interface DamageResistantMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  isResistantTo(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  toString(): string;
  types(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>;
}
export type DamageResistant = DamageResistantMembers & JavaOpaque<"java.lang.Record">;
export interface DamageResistantStatics {
  new(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>): DamageResistant;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DamageResistant]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DamageResistant>;
}

/** JVM record net.minecraft.world.item.component.DeathProtection. */
export interface DeathProtectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  applyEffects(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  deathEffects(): JavaList<j_net_minecraft_world_item_consume_effects.ConsumeEffect>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type DeathProtection = DeathProtectionMembers & JavaOpaque<"java.lang.Record">;
export interface DeathProtectionStatics {
  new(arg0: JavaList<j_net_minecraft_world_item_consume_effects.ConsumeEffect>): DeathProtection;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DeathProtection]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DeathProtection>;
  readonly TOTEM_OF_UNDYING: DeathProtection;
}

/** JVM record net.minecraft.world.item.component.DebugStickState. */
export interface DebugStickStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  properties(): JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>, j_net_minecraft_world_level_block_state_properties.Property<object>>;
  toString(): string;
  withProperty(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_world_level_block_state_properties.Property<object>): DebugStickState;
}
export type DebugStickState = DebugStickStateMembers & JavaOpaque<"java.lang.Record">;
export interface DebugStickStateStatics {
  new(arg0: JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_level_block.Block>, j_net_minecraft_world_level_block_state_properties.Property<object>>): DebugStickState;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DebugStickState]>;
  readonly EMPTY: DebugStickState;
}

/** JVM record net.minecraft.world.item.component.DyedItemColor. */
export interface DyedItemColorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  rgb(): number;
  toString(): string;
}
export type DyedItemColor = DyedItemColorMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface DyedItemColorStatics {
  new(arg0: number): DyedItemColor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DyedItemColor]>;
  readonly LEATHER_COLOR: -6265536;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, DyedItemColor>;
  applyDyes(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaList<j_net_minecraft_world_item.DyeItem>): j_net_minecraft_world_item.ItemStack;
  getOrDefault(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): number;
}

/** JVM record net.minecraft.world.item.component.FireworkExplosion. */
export interface FireworkExplosionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addAdditionalTooltip(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>): void;
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  colors(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  equals(arg0: object): boolean;
  fadeColors(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  hasTrail(): boolean;
  hasTwinkle(): boolean;
  hashCode(): number;
  shape(): FireworkExplosion_Shape;
  toString(): string;
  withFadeColors(arg0: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">): FireworkExplosion;
}
export type FireworkExplosion = FireworkExplosionMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface FireworkExplosionStatics {
  new(arg0: FireworkExplosion_Shape, arg1: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">, arg2: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">, arg3: boolean, arg4: boolean): FireworkExplosion;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FireworkExplosion]>;
  readonly COLOR_LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">]>;
  readonly DEFAULT: FireworkExplosion;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, FireworkExplosion>;
}

/** Live JVM enum net.minecraft.world.item.component.FireworkExplosion$Shape; constants are host handles, not strings. */
export type FireworkExplosion_Shape = JavaEnum<"net.minecraft.world.item.component.FireworkExplosion$Shape", "BURST" | "CREEPER" | "LARGE_BALL" | "SMALL_BALL" | "STAR"> & FireworkExplosion_ShapeMembers;
export interface FireworkExplosion_ShapeMembers {
  getId(): number;
  getName(): j_net_minecraft_network_chat.MutableComponent;
  getSerializedName(): string;
}
export interface FireworkExplosion_ShapeStatics {
  readonly BURST: FireworkExplosion_Shape;
  readonly CREEPER: FireworkExplosion_Shape;
  readonly LARGE_BALL: FireworkExplosion_Shape;
  readonly SMALL_BALL: FireworkExplosion_Shape;
  readonly STAR: FireworkExplosion_Shape;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [FireworkExplosion_Shape]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, FireworkExplosion_Shape>;
  byId(arg0: number): FireworkExplosion_Shape;
  valueOf(arg0: string): FireworkExplosion_Shape;
  values(): Array<FireworkExplosion_Shape>;
}

/** JVM record net.minecraft.world.item.component.Fireworks. */
export interface FireworksMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  explosions(): JavaList<FireworkExplosion>;
  flightDuration(): number;
  hashCode(): number;
  toString(): string;
}
export type Fireworks = FireworksMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface FireworksStatics {
  new(arg0: number, arg1: JavaList<FireworkExplosion>): Fireworks;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Fireworks]>;
  readonly MAX_EXPLOSIONS: 256;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Fireworks>;
}

/** JVM record net.minecraft.world.item.component.InstrumentComponent. */
export interface InstrumentComponentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  instrument(): j_net_minecraft_world_item.EitherHolder<j_net_minecraft_world_item.Instrument>;
  toString(): string;
  unwrap(arg0: j_net_minecraft_core.HolderLookup_Provider): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>>;
}
export type InstrumentComponent = InstrumentComponentMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface InstrumentComponentStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Instrument>): InstrumentComponent;
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item.Instrument>): InstrumentComponent;
  new(arg0: j_net_minecraft_world_item.EitherHolder<j_net_minecraft_world_item.Instrument>): InstrumentComponent;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [InstrumentComponent]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, InstrumentComponent>;
}

/** JVM record net.minecraft.world.item.component.ItemAttributeModifiers. */
export interface ItemAttributeModifiersMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  compute(arg0: number, arg1: j_net_minecraft_world_entity.EquipmentSlot): number;
  equals(arg0: object): boolean;
  forEach(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  forEach(arg0: j_net_minecraft_world_entity.EquipmentSlotGroup, arg1: JavaBiConsumer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier>): void;
  forEach(arg0: j_net_minecraft_world_entity.EquipmentSlotGroup, arg1: JavaOpaque<"org.apache.commons.lang3.function.TriConsumer", [j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, j_net_minecraft_world_entity_ai_attributes.AttributeModifier, ItemAttributeModifiers_Display]>): void;
  hashCode(): number;
  modifiers(): JavaList<ItemAttributeModifiers_Entry>;
  toString(): string;
  withModifierAdded(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg2: j_net_minecraft_world_entity.EquipmentSlotGroup): ItemAttributeModifiers;
}
export type ItemAttributeModifiers = ItemAttributeModifiersMembers & JavaOpaque<"java.lang.Record">;
export interface ItemAttributeModifiersStatics {
  new(arg0: JavaList<ItemAttributeModifiers_Entry>): ItemAttributeModifiers;
  readonly ATTRIBUTE_MODIFIER_FORMAT: JavaOpaque<"java.text.DecimalFormat">;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemAttributeModifiers]>;
  readonly EMPTY: ItemAttributeModifiers;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemAttributeModifiers>;
  builder(): ItemAttributeModifiers_Builder;
}

/** JVM class net.minecraft.world.item.component.ItemAttributeModifiers$Builder. */
export interface ItemAttributeModifiers_BuilderMembers {
  add(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg2: j_net_minecraft_world_entity.EquipmentSlotGroup): ItemAttributeModifiers_Builder;
  add(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg2: j_net_minecraft_world_entity.EquipmentSlotGroup, arg3: ItemAttributeModifiers_Display): ItemAttributeModifiers_Builder;
  build(): ItemAttributeModifiers;
}
export type ItemAttributeModifiers_Builder = ItemAttributeModifiers_BuilderMembers;
export interface ItemAttributeModifiers_BuilderStatics {
}

/** JVM interface net.minecraft.world.item.component.ItemAttributeModifiers$Display. */
export interface ItemAttributeModifiers_DisplayMembers {
  apply(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier): void;
  type(): ItemAttributeModifiers_Display_Type;
}
export type ItemAttributeModifiers_Display = ItemAttributeModifiers_DisplayMembers;
export interface ItemAttributeModifiers_DisplayStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemAttributeModifiers_Display]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemAttributeModifiers_Display>;
  attributeModifiers(): ItemAttributeModifiers_Display;
  hidden(): ItemAttributeModifiers_Display;
  override(arg0: j_net_minecraft_network_chat.Component): ItemAttributeModifiers_Display;
}

/** JVM record net.minecraft.world.item.component.ItemAttributeModifiers$Display$Default. */
export interface ItemAttributeModifiers_Display_DefaultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ItemAttributeModifiers_Display];
  apply(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): ItemAttributeModifiers_Display_Type;
}
export type ItemAttributeModifiers_Display_Default = ItemAttributeModifiers_Display_DefaultMembers & JavaOpaque<"java.lang.Record"> & ItemAttributeModifiers_Display;
export interface ItemAttributeModifiers_Display_DefaultStatics {
  new(): ItemAttributeModifiers_Display_Default;
}

/** JVM record net.minecraft.world.item.component.ItemAttributeModifiers$Display$Hidden. */
export interface ItemAttributeModifiers_Display_HiddenMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ItemAttributeModifiers_Display];
  apply(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): ItemAttributeModifiers_Display_Type;
}
export type ItemAttributeModifiers_Display_Hidden = ItemAttributeModifiers_Display_HiddenMembers & JavaOpaque<"java.lang.Record"> & ItemAttributeModifiers_Display;
export interface ItemAttributeModifiers_Display_HiddenStatics {
  new(): ItemAttributeModifiers_Display_Hidden;
}

/** JVM record net.minecraft.world.item.component.ItemAttributeModifiers$Display$OverrideText. */
export interface ItemAttributeModifiers_Display_OverrideTextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ItemAttributeModifiers_Display];
  apply(arg0: JavaConsumer<j_net_minecraft_network_chat.Component>, arg1: j_net_minecraft_world_entity_player.Player | null, arg2: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg3: j_net_minecraft_world_entity_ai_attributes.AttributeModifier): void;
  component(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): ItemAttributeModifiers_Display_Type;
}
export type ItemAttributeModifiers_Display_OverrideText = ItemAttributeModifiers_Display_OverrideTextMembers & JavaOpaque<"java.lang.Record"> & ItemAttributeModifiers_Display;
export interface ItemAttributeModifiers_Display_OverrideTextStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ItemAttributeModifiers_Display_OverrideText;
}

/** Live JVM enum net.minecraft.world.item.component.ItemAttributeModifiers$Display$Type; constants are host handles, not strings. */
export type ItemAttributeModifiers_Display_Type = JavaEnum<"net.minecraft.world.item.component.ItemAttributeModifiers$Display$Type", "DEFAULT" | "HIDDEN" | "OVERRIDE"> & ItemAttributeModifiers_Display_TypeMembers;
export interface ItemAttributeModifiers_Display_TypeMembers {
  getSerializedName(): string;
}
export interface ItemAttributeModifiers_Display_TypeStatics {
  readonly DEFAULT: ItemAttributeModifiers_Display_Type;
  readonly HIDDEN: ItemAttributeModifiers_Display_Type;
  readonly OVERRIDE: ItemAttributeModifiers_Display_Type;
  valueOf(arg0: string): ItemAttributeModifiers_Display_Type;
  values(): Array<ItemAttributeModifiers_Display_Type>;
}

/** JVM record net.minecraft.world.item.component.ItemAttributeModifiers$Entry. */
export interface ItemAttributeModifiers_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attribute(): j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>;
  display(): ItemAttributeModifiers_Display;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_resources.ResourceLocation): boolean;
  modifier(): j_net_minecraft_world_entity_ai_attributes.AttributeModifier;
  slot(): j_net_minecraft_world_entity.EquipmentSlotGroup;
  toString(): string;
}
export type ItemAttributeModifiers_Entry = ItemAttributeModifiers_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ItemAttributeModifiers_EntryStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg2: j_net_minecraft_world_entity.EquipmentSlotGroup): ItemAttributeModifiers_Entry;
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>, arg1: j_net_minecraft_world_entity_ai_attributes.AttributeModifier, arg2: j_net_minecraft_world_entity.EquipmentSlotGroup, arg3: ItemAttributeModifiers_Display): ItemAttributeModifiers_Entry;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemAttributeModifiers_Entry]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemAttributeModifiers_Entry>;
}

/** JVM class net.minecraft.world.item.component.ItemContainerContents. */
export interface ItemContainerContentsMembers {
  readonly __javaSupertypes?: readonly [TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  copyInto(arg0: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>): void;
  copyOne(): j_net_minecraft_world_item.ItemStack;
  equals(arg0: object): boolean;
  hashCode(): number;
  readonly items: j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  nonEmptyItems(): Iterable<j_net_minecraft_world_item.ItemStack>;
  nonEmptyItemsCopy(): Iterable<j_net_minecraft_world_item.ItemStack>;
  nonEmptyStream(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>;
  stream(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_world_item.ItemStack]>;
}
export type ItemContainerContents = ItemContainerContentsMembers & TooltipProvider;
export interface ItemContainerContentsStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemContainerContents]>;
  readonly EMPTY: ItemContainerContents;
  readonly MAX_SIZE: 256;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemContainerContents>;
  fromItems(arg0: JavaList<j_net_minecraft_world_item.ItemStack>): ItemContainerContents;
}

/** JVM record net.minecraft.world.item.component.ItemLore. */
export interface ItemLoreMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  lines(): JavaList<j_net_minecraft_network_chat.Component>;
  styledLines(): JavaList<j_net_minecraft_network_chat.Component>;
  toString(): string;
  withLineAdded(arg0: j_net_minecraft_network_chat.Component): ItemLore;
}
export type ItemLore = ItemLoreMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface ItemLoreStatics {
  new(arg0: JavaList<j_net_minecraft_network_chat.Component>): ItemLore;
  new(arg0: JavaList<j_net_minecraft_network_chat.Component>, arg1: JavaList<j_net_minecraft_network_chat.Component>): ItemLore;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ItemLore]>;
  readonly EMPTY: ItemLore;
  readonly MAX_LINES: 256;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ItemLore>;
}

/** JVM record net.minecraft.world.item.component.LodestoneTracker. */
export interface LodestoneTrackerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  target(): JavaOptional<j_net_minecraft_core.GlobalPos>;
  tick(arg0: j_net_minecraft_server_level.ServerLevel): LodestoneTracker;
  toString(): string;
  tracked(): boolean;
}
export type LodestoneTracker = LodestoneTrackerMembers & JavaOpaque<"java.lang.Record">;
export interface LodestoneTrackerStatics {
  new(arg0: JavaOptional<j_net_minecraft_core.GlobalPos>, arg1: boolean): LodestoneTracker;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [LodestoneTracker]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, LodestoneTracker>;
}

/** JVM record net.minecraft.world.item.component.MapDecorations. */
export interface MapDecorationsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  decorations(): JavaMap<string, MapDecorations_Entry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  withDecoration(arg0: string, arg1: MapDecorations_Entry): MapDecorations;
}
export type MapDecorations = MapDecorationsMembers & JavaOpaque<"java.lang.Record">;
export interface MapDecorationsStatics {
  new(arg0: JavaMap<string, MapDecorations_Entry>): MapDecorations;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapDecorations]>;
  readonly EMPTY: MapDecorations;
}

/** JVM record net.minecraft.world.item.component.MapDecorations$Entry. */
export interface MapDecorations_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  rotation(): number;
  toString(): string;
  type(): j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>;
  x(): number;
  z(): number;
}
export type MapDecorations_Entry = MapDecorations_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface MapDecorations_EntryStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>, arg1: number, arg2: number, arg3: number): MapDecorations_Entry;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapDecorations_Entry]>;
}

/** JVM record net.minecraft.world.item.component.MapItemColor. */
export interface MapItemColorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  rgb(): number;
  toString(): string;
}
export type MapItemColor = MapItemColorMembers & JavaOpaque<"java.lang.Record">;
export interface MapItemColorStatics {
  new(arg0: number): MapItemColor;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapItemColor]>;
  readonly DEFAULT: MapItemColor;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MapItemColor>;
}

/** Live JVM enum net.minecraft.world.item.component.MapPostProcessing; constants are host handles, not strings. */
export type MapPostProcessing = JavaEnum<"net.minecraft.world.item.component.MapPostProcessing", "LOCK" | "SCALE"> & MapPostProcessingMembers;
export interface MapPostProcessingMembers {
  id(): number;
}
export interface MapPostProcessingStatics {
  readonly LOCK: MapPostProcessing;
  readonly SCALE: MapPostProcessing;
  readonly ID_MAP: JavaOpaque<"java.util.function.IntFunction", [MapPostProcessing]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MapPostProcessing>;
  valueOf(arg0: string): MapPostProcessing;
  values(): Array<MapPostProcessing>;
}

/** JVM record net.minecraft.world.item.component.OminousBottleAmplifier. */
export interface OminousBottleAmplifierMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumableListener, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  cancelUsingItem(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaList<j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>>): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: Consumable): void;
  toString(): string;
  value(): number;
}
export type OminousBottleAmplifier = OminousBottleAmplifierMembers & JavaOpaque<"java.lang.Record"> & ConsumableListener & TooltipProvider;
export interface OminousBottleAmplifierStatics {
  new(arg0: number): OminousBottleAmplifier;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [OminousBottleAmplifier]>;
  readonly EFFECT_DURATION: 120000;
  readonly MAX_AMPLIFIER: 4;
  readonly MIN_AMPLIFIER: 0;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, OminousBottleAmplifier>;
}

/** JVM record net.minecraft.world.item.component.ProvidesTrimMaterial. */
export interface ProvidesTrimMaterialMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  material(): j_net_minecraft_world_item.EitherHolder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>;
  toString(): string;
  unwrap(arg0: j_net_minecraft_core.HolderLookup_Provider): JavaOptional<j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>>;
}
export type ProvidesTrimMaterial = ProvidesTrimMaterialMembers & JavaOpaque<"java.lang.Record">;
export interface ProvidesTrimMaterialStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): ProvidesTrimMaterial;
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): ProvidesTrimMaterial;
  new(arg0: j_net_minecraft_world_item.EitherHolder<j_net_minecraft_world_item_equipment_trim.TrimMaterial>): ProvidesTrimMaterial;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProvidesTrimMaterial]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, ProvidesTrimMaterial>;
}

/** JVM record net.minecraft.world.item.component.ResolvableProfile. */
export interface ResolvableProfileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  gameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  hashCode(): number;
  id(): JavaOptional<JavaOpaque<"java.util.UUID">>;
  isResolved(): boolean;
  name(): JavaOptional<string>;
  pollResolve(): ResolvableProfile | null;
  properties(): JavaOpaque<"com.mojang.authlib.properties.PropertyMap">;
  resolve(): PromiseLike<ResolvableProfile>;
  toString(): string;
}
export type ResolvableProfile = ResolvableProfileMembers & JavaOpaque<"java.lang.Record">;
export interface ResolvableProfileStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): ResolvableProfile;
  new(arg0: JavaOptional<string>, arg1: JavaOptional<JavaOpaque<"java.util.UUID">>, arg2: JavaOpaque<"com.mojang.authlib.properties.PropertyMap">): ResolvableProfile;
  new(arg0: JavaOptional<string>, arg1: JavaOptional<JavaOpaque<"java.util.UUID">>, arg2: JavaOpaque<"com.mojang.authlib.properties.PropertyMap">, arg3: JavaOpaque<"com.mojang.authlib.GameProfile">): ResolvableProfile;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ResolvableProfile]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, ResolvableProfile>;
}

/** JVM record net.minecraft.world.item.component.SeededContainerLoot. */
export interface SeededContainerLootMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  lootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  seed(): bigint;
  toString(): string;
}
export type SeededContainerLoot = SeededContainerLootMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface SeededContainerLootStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: bigint): SeededContainerLoot;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SeededContainerLoot]>;
}

/** JVM record net.minecraft.world.item.component.SuspiciousStewEffects. */
export interface SuspiciousStewEffectsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ConsumableListener, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  cancelUsingItem(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaList<j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>>): void;
  effects(): JavaList<SuspiciousStewEffects_Entry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  onConsume(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_entity.LivingEntity, arg2: j_net_minecraft_world_item.ItemStack, arg3: Consumable): void;
  toString(): string;
  withEffectAdded(arg0: SuspiciousStewEffects_Entry): SuspiciousStewEffects;
}
export type SuspiciousStewEffects = SuspiciousStewEffectsMembers & JavaOpaque<"java.lang.Record"> & ConsumableListener & TooltipProvider;
export interface SuspiciousStewEffectsStatics {
  new(arg0: JavaList<SuspiciousStewEffects_Entry>): SuspiciousStewEffects;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SuspiciousStewEffects]>;
  readonly DEFAULT_DURATION: 160;
  readonly EMPTY: SuspiciousStewEffects;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SuspiciousStewEffects>;
}

/** JVM record net.minecraft.world.item.component.SuspiciousStewEffects$Entry. */
export interface SuspiciousStewEffects_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  createEffectInstance(): j_net_minecraft_world_effect.MobEffectInstance;
  duration(): number;
  effect(): j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type SuspiciousStewEffects_Entry = SuspiciousStewEffects_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface SuspiciousStewEffects_EntryStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: number): SuspiciousStewEffects_Entry;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [SuspiciousStewEffects_Entry]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, SuspiciousStewEffects_Entry>;
}

/** JVM record net.minecraft.world.item.component.Tool. */
export interface ToolMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  canDestroyBlocksInCreative(): boolean;
  damagePerBlock(): number;
  defaultMiningSpeed(): number;
  equals(arg0: object): boolean;
  getMiningSpeed(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  hashCode(): number;
  isCorrectForDrops(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  rules(): JavaList<Tool_Rule>;
  toString(): string;
}
export type Tool = ToolMembers & JavaOpaque<"java.lang.Record">;
export interface ToolStatics {
  new(arg0: JavaList<Tool_Rule>, arg1: number, arg2: number, arg3: boolean): Tool;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Tool]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Tool>;
}

/** JVM record net.minecraft.world.item.component.Tool$Rule. */
export interface Tool_RuleMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blocks(): j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>;
  correctForDrops(): JavaOptional<boolean>;
  equals(arg0: object): boolean;
  hashCode(): number;
  speed(): JavaOptional<number>;
  toString(): string;
}
export type Tool_Rule = Tool_RuleMembers & JavaOpaque<"java.lang.Record">;
export interface Tool_RuleStatics {
  new(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: JavaOptional<number>, arg2: JavaOptional<boolean>): Tool_Rule;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Tool_Rule]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Tool_Rule>;
  deniesDrops(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>): Tool_Rule;
  minesAndDrops(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: number): Tool_Rule;
  overrideSpeed(arg0: j_net_minecraft_core.HolderSet<j_net_minecraft_world_level_block.Block>, arg1: number): Tool_Rule;
}

/** JVM record net.minecraft.world.item.component.TooltipDisplay. */
export interface TooltipDisplayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  hiddenComponents(): JavaOpaque<"java.util.SequencedSet", [j_net_minecraft_core_component.DataComponentType<object>]>;
  hideTooltip(): boolean;
  shows(arg0: j_net_minecraft_core_component.DataComponentType<object>): boolean;
  toString(): string;
  withHidden(arg0: j_net_minecraft_core_component.DataComponentType<object>, arg1: boolean): TooltipDisplay;
}
export type TooltipDisplay = TooltipDisplayMembers & JavaOpaque<"java.lang.Record">;
export interface TooltipDisplayStatics {
  new(arg0: boolean, arg1: JavaOpaque<"java.util.SequencedSet", [j_net_minecraft_core_component.DataComponentType<object>]>): TooltipDisplay;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TooltipDisplay]>;
  readonly DEFAULT: TooltipDisplay;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TooltipDisplay>;
}

/** JVM interface net.minecraft.world.item.component.TooltipProvider. */
export interface TooltipProviderMembers {
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
}
export type TooltipProvider = TooltipProviderMembers;
export interface TooltipProviderStatics {
}

/** JVM record net.minecraft.world.item.component.UseCooldown. */
export interface UseCooldownMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  apply(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  cooldownGroup(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  equals(arg0: object): boolean;
  hashCode(): number;
  seconds(): number;
  ticks(): number;
  toString(): string;
}
export type UseCooldown = UseCooldownMembers & JavaOpaque<"java.lang.Record">;
export interface UseCooldownStatics {
  new(arg0: number): UseCooldown;
  new(arg0: number, arg1: JavaOptional<j_net_minecraft_resources.ResourceLocation>): UseCooldown;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UseCooldown]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, UseCooldown>;
}

/** JVM record net.minecraft.world.item.component.UseRemainder. */
export interface UseRemainderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  convertInto(): j_net_minecraft_world_item.ItemStack;
  convertIntoRemainder(arg0: j_net_minecraft_world_item.ItemStack, arg1: number, arg2: boolean, arg3: UseRemainder_OnExtraCreatedRemainder): j_net_minecraft_world_item.ItemStack;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type UseRemainder = UseRemainderMembers & JavaOpaque<"java.lang.Record">;
export interface UseRemainderStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack): UseRemainder;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [UseRemainder]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, UseRemainder>;
}

/** JVM interface net.minecraft.world.item.component.UseRemainder$OnExtraCreatedRemainder. */
export interface UseRemainder_OnExtraCreatedRemainderMembers {
  apply(arg0: j_net_minecraft_world_item.ItemStack): void;
}
export type UseRemainder_OnExtraCreatedRemainder = UseRemainder_OnExtraCreatedRemainderMembers;
export interface UseRemainder_OnExtraCreatedRemainderStatics {
}

/** JVM record net.minecraft.world.item.component.Weapon. */
export interface WeaponMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  disableBlockingForSeconds(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  itemDamagePerAttack(): number;
  toString(): string;
}
export type Weapon = WeaponMembers & JavaOpaque<"java.lang.Record">;
export interface WeaponStatics {
  new(arg0: number): Weapon;
  new(arg0: number, arg1: number): Weapon;
  readonly AXE_DISABLES_BLOCKING_FOR_SECONDS: 5;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Weapon]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, Weapon>;
}

/** JVM record net.minecraft.world.item.component.WritableBookContent. */
export interface WritableBookContentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, BookContent<string, WritableBookContent>];
  equals(arg0: object): boolean;
  getPages(arg0: boolean): JavaOpaque<"java.util.stream.Stream", [string]>;
  hashCode(): number;
  pages(): JavaList<j_net_minecraft_server_network.Filterable<string>>;
  toString(): string;
  withReplacedPages(arg0: JavaList<j_net_minecraft_server_network.Filterable<string>>): WritableBookContent;
}
export type WritableBookContent = WritableBookContentMembers & JavaOpaque<"java.lang.Record">;
export interface WritableBookContentStatics {
  new(arg0: JavaList<j_net_minecraft_server_network.Filterable<string>>): WritableBookContent;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WritableBookContent]>;
  readonly EMPTY: WritableBookContent;
  readonly MAX_PAGES: 100;
  readonly PAGES_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<j_net_minecraft_server_network.Filterable<string>>]>;
  readonly PAGE_EDIT_LENGTH: 1024;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, WritableBookContent>;
}

/** JVM record net.minecraft.world.item.component.WrittenBookContent. */
export interface WrittenBookContentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, BookContent<j_net_minecraft_network_chat.Component, WrittenBookContent>, TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  author(): string;
  equals(arg0: object): boolean;
  generation(): number;
  getPages(arg0: boolean): JavaList<j_net_minecraft_network_chat.Component>;
  hashCode(): number;
  markResolved(): WrittenBookContent;
  pages(): JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>;
  resolve(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: j_net_minecraft_world_entity_player.Player | null): WrittenBookContent | null;
  resolved(): boolean;
  title(): j_net_minecraft_server_network.Filterable<string>;
  toString(): string;
  tryCraftCopy(): WrittenBookContent | null;
  withReplacedPages(arg0: JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>): WrittenBookContent;
}
export type WrittenBookContent = WrittenBookContentMembers & JavaOpaque<"java.lang.Record"> & TooltipProvider;
export interface WrittenBookContentStatics {
  new(arg0: j_net_minecraft_server_network.Filterable<string>, arg1: string, arg2: number, arg3: JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>, arg4: boolean): WrittenBookContent;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WrittenBookContent]>;
  readonly CONTENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_network_chat.Component]>;
  readonly EMPTY: WrittenBookContent;
  readonly MAX_CRAFTABLE_GENERATION: 2;
  readonly MAX_GENERATION: 3;
  readonly PAGES_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>]>;
  readonly PAGE_LENGTH: 32767;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, WrittenBookContent>;
  readonly TITLE_LENGTH: 16;
  readonly TITLE_MAX_LENGTH: 32;
  pagesCodec(arg0: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_network_chat.Component]>): JavaOpaque<"com.mojang.serialization.Codec", [JavaList<j_net_minecraft_server_network.Filterable<j_net_minecraft_network_chat.Component>>]>;
  resolveForItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_commands.CommandSourceStack, arg2: j_net_minecraft_world_entity_player.Player | null): boolean;
}
