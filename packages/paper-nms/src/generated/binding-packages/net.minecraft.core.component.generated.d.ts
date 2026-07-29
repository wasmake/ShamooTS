// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_axolotl from './net.minecraft.world.entity.animal.axolotl.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_animal_wolf from './net.minecraft.world.entity.animal.wolf.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_food from './net.minecraft.world.food.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';
import type * as j_net_minecraft_world_item_equipment_trim from './net.minecraft.world.item.equipment.trim.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';

/** JVM class net.minecraft.core.component.DataComponentExactPredicate. */
export interface DataComponentExactPredicateMembers {
  readonly __javaSupertypes?: readonly [JavaPredicate<DataComponentGetter>];
  alwaysMatches(): boolean;
  asPatch(): DataComponentPatch;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  test(arg0: DataComponentGetter): boolean;
  toString(): string;
}
export type DataComponentExactPredicate = DataComponentExactPredicateMembers & JavaPredicate<DataComponentGetter>;
export interface DataComponentExactPredicateStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentExactPredicate]>;
  readonly EMPTY: DataComponentExactPredicate;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentExactPredicate>;
  allOf(arg0: DataComponentMap): DataComponentExactPredicate;
  builder(): DataComponentExactPredicate_Builder;
  expect<T>(arg0: DataComponentType<T>, arg1: T): DataComponentExactPredicate;
  someOf(arg0: DataComponentMap, ...arg1: Array<DataComponentType<object>>): DataComponentExactPredicate;
}

/** JVM class net.minecraft.core.component.DataComponentExactPredicate$Builder. */
export interface DataComponentExactPredicate_BuilderMembers {
  build(): DataComponentExactPredicate;
  expect<T>(arg0: DataComponentType<T>, arg1: T): DataComponentExactPredicate_Builder;
  expect<T>(arg0: TypedDataComponent<T>): DataComponentExactPredicate_Builder;
}
export type DataComponentExactPredicate_Builder = DataComponentExactPredicate_BuilderMembers;
export interface DataComponentExactPredicate_BuilderStatics {
}

/** JVM interface net.minecraft.core.component.DataComponentGetter. */
export interface DataComponentGetterMembers {
  get<T>(arg0: DataComponentType<T>): T | null;
  getOrDefault<T>(arg0: DataComponentType<T>, arg1: T): T;
  getTyped<T>(arg0: DataComponentType<T>): TypedDataComponent<T> | null;
}
export type DataComponentGetter = DataComponentGetterMembers;
export interface DataComponentGetterStatics {
}

/** JVM interface net.minecraft.core.component.DataComponentHolder. */
export interface DataComponentHolderMembers {
  readonly __javaSupertypes?: readonly [DataComponentGetter];
  get<T>(arg0: DataComponentType<T>): T | null;
  getAllOfType<T>(arg0: JavaClass<T>): JavaOpaque<"java.util.stream.Stream", [T]>;
  getComponents(): DataComponentMap;
  getOrDefault<T>(arg0: DataComponentType<T>, arg1: T): T;
  has(arg0: DataComponentType<object>): boolean;
}
export type DataComponentHolder = DataComponentHolderMembers & DataComponentGetter;
export interface DataComponentHolderStatics {
}

/** JVM interface net.minecraft.core.component.DataComponentMap. */
export interface DataComponentMapMembers {
  readonly __javaSupertypes?: readonly [Iterable<TypedDataComponent<object>>, DataComponentGetter];
  filter(arg0: JavaPredicate<DataComponentType<object>>): DataComponentMap;
  has(arg0: DataComponentType<object>): boolean;
  isEmpty(): boolean;
  iterator(): JavaOpaque<"java.util.Iterator", [TypedDataComponent<object>]>;
  keySet(): JavaSet<DataComponentType<object>>;
  size(): number;
  stream(): JavaOpaque<"java.util.stream.Stream", [TypedDataComponent<object>]>;
}
export type DataComponentMap = DataComponentMapMembers & Iterable<TypedDataComponent<object>> & DataComponentGetter;
export interface DataComponentMapStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentMap]>;
  readonly EMPTY: DataComponentMap;
  builder(): DataComponentMap_Builder;
  composite(arg0: DataComponentMap, arg1: DataComponentMap): DataComponentMap;
  makeCodec(arg0: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentType<object>]>): JavaOpaque<"com.mojang.serialization.Codec", [DataComponentMap]>;
  makeCodecFromMap(arg0: JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<DataComponentType<object>, object>]>): JavaOpaque<"com.mojang.serialization.Codec", [DataComponentMap]>;
}

/** JVM class net.minecraft.core.component.DataComponentMap$Builder. */
export interface DataComponentMap_BuilderMembers {
  addAll(arg0: DataComponentMap): DataComponentMap_Builder;
  build(): DataComponentMap;
  set<T>(arg0: DataComponentType<T>, arg1: T | null): DataComponentMap_Builder;
}
export type DataComponentMap_Builder = DataComponentMap_BuilderMembers;
export interface DataComponentMap_BuilderStatics {
}

/** JVM class net.minecraft.core.component.DataComponentPatch. */
export interface DataComponentPatchMembers {
  entrySet(): JavaSet<JavaMapEntry<DataComponentType<object>, JavaOptional<object>>>;
  equals(arg0: object): boolean;
  forget(arg0: JavaPredicate<DataComponentType<object>>): DataComponentPatch;
  get<T>(arg0: DataComponentType<T>): JavaOptional<T> | null;
  hashCode(): number;
  isEmpty(): boolean;
  size(): number;
  split(): DataComponentPatch_SplitResult;
  toString(): string;
}
export type DataComponentPatch = DataComponentPatchMembers;
export interface DataComponentPatchStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentPatch]>;
  readonly DELIMITED_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentPatch>;
  readonly EMPTY: DataComponentPatch;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentPatch>;
  builder(): DataComponentPatch_Builder;
}

/** JVM class net.minecraft.core.component.DataComponentPatch$Builder. */
export interface DataComponentPatch_BuilderMembers {
  build(): DataComponentPatch;
  clear(arg0: DataComponentType<object>): void;
  copy(arg0: DataComponentPatch): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  isSet(arg0: DataComponentType<object>): boolean;
  remove<T>(arg0: DataComponentType<T>): DataComponentPatch_Builder;
  set<T>(arg0: DataComponentType<T>, arg1: T): DataComponentPatch_Builder;
  set<T>(arg0: TypedDataComponent<T>): DataComponentPatch_Builder;
}
export type DataComponentPatch_Builder = DataComponentPatch_BuilderMembers;
export interface DataComponentPatch_BuilderStatics {
}

/** JVM record net.minecraft.core.component.DataComponentPatch$SplitResult. */
export interface DataComponentPatch_SplitResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  added(): DataComponentMap;
  equals(arg0: object): boolean;
  hashCode(): number;
  removed(): JavaSet<DataComponentType<object>>;
  toString(): string;
}
export type DataComponentPatch_SplitResult = DataComponentPatch_SplitResultMembers & JavaOpaque<"java.lang.Record">;
export interface DataComponentPatch_SplitResultStatics {
  new(arg0: DataComponentMap, arg1: JavaSet<DataComponentType<object>>): DataComponentPatch_SplitResult;
  readonly EMPTY: DataComponentPatch_SplitResult;
}

/** JVM class net.minecraft.core.component.DataComponents. */
export interface DataComponentsMembers {
}
export type DataComponents = DataComponentsMembers;
export interface DataComponentsStatics {
  new(): DataComponents;
  readonly ATTRIBUTE_MODIFIERS: DataComponentType<j_net_minecraft_world_item_component.ItemAttributeModifiers>;
  readonly AXOLOTL_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal_axolotl.Axolotl_Variant>;
  readonly BANNER_PATTERNS: DataComponentType<j_net_minecraft_world_level_block_entity.BannerPatternLayers>;
  readonly BASE_COLOR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly BEES: DataComponentType<j_net_minecraft_world_item_component.Bees>;
  readonly BLOCKS_ATTACKS: DataComponentType<j_net_minecraft_world_item_component.BlocksAttacks>;
  readonly BLOCK_ENTITY_DATA: DataComponentType<j_net_minecraft_world_item_component.CustomData>;
  readonly BLOCK_STATE: DataComponentType<j_net_minecraft_world_item_component.BlockItemStateProperties>;
  readonly BREAK_SOUND: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>>;
  readonly BUCKET_ENTITY_DATA: DataComponentType<j_net_minecraft_world_item_component.CustomData>;
  readonly BUNDLE_CONTENTS: DataComponentType<j_net_minecraft_world_item_component.BundleContents>;
  readonly CAN_BREAK: DataComponentType<j_net_minecraft_world_item.AdventureModePredicate>;
  readonly CAN_PLACE_ON: DataComponentType<j_net_minecraft_world_item.AdventureModePredicate>;
  readonly CAT_COLLAR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly CAT_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CatVariant>>;
  readonly CHARGED_PROJECTILES: DataComponentType<j_net_minecraft_world_item_component.ChargedProjectiles>;
  readonly CHICKEN_VARIANT: DataComponentType<j_net_minecraft_world_item.EitherHolder<j_net_minecraft_world_entity_animal.ChickenVariant>>;
  readonly COMMON_ITEM_COMPONENTS: DataComponentMap;
  readonly CONSUMABLE: DataComponentType<j_net_minecraft_world_item_component.Consumable>;
  readonly CONTAINER: DataComponentType<j_net_minecraft_world_item_component.ItemContainerContents>;
  readonly CONTAINER_LOOT: DataComponentType<j_net_minecraft_world_item_component.SeededContainerLoot>;
  readonly COW_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CowVariant>>;
  readonly CREATIVE_SLOT_LOCK: DataComponentType<j_net_minecraft_util.Unit>;
  readonly CUSTOM_DATA: DataComponentType<j_net_minecraft_world_item_component.CustomData>;
  readonly CUSTOM_MODEL_DATA: DataComponentType<j_net_minecraft_world_item_component.CustomModelData>;
  readonly CUSTOM_NAME: DataComponentType<j_net_minecraft_network_chat.Component>;
  readonly DAMAGE: DataComponentType<number>;
  readonly DAMAGE_RESISTANT: DataComponentType<j_net_minecraft_world_item_component.DamageResistant>;
  readonly DEATH_PROTECTION: DataComponentType<j_net_minecraft_world_item_component.DeathProtection>;
  readonly DEBUG_STICK_STATE: DataComponentType<j_net_minecraft_world_item_component.DebugStickState>;
  readonly DYED_COLOR: DataComponentType<j_net_minecraft_world_item_component.DyedItemColor>;
  readonly ENCHANTABLE: DataComponentType<j_net_minecraft_world_item_enchantment.Enchantable>;
  readonly ENCHANTMENTS: DataComponentType<j_net_minecraft_world_item_enchantment.ItemEnchantments>;
  readonly ENCHANTMENT_GLINT_OVERRIDE: DataComponentType<boolean>;
  readonly ENTITY_DATA: DataComponentType<j_net_minecraft_world_item_component.CustomData>;
  readonly EQUIPPABLE: DataComponentType<j_net_minecraft_world_item_equipment.Equippable>;
  readonly FIREWORKS: DataComponentType<j_net_minecraft_world_item_component.Fireworks>;
  readonly FIREWORK_EXPLOSION: DataComponentType<j_net_minecraft_world_item_component.FireworkExplosion>;
  readonly FOOD: DataComponentType<j_net_minecraft_world_food.FoodProperties>;
  readonly FOX_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal.Fox_Variant>;
  readonly FROG_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_frog.FrogVariant>>;
  readonly GLIDER: DataComponentType<j_net_minecraft_util.Unit>;
  readonly HORSE_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal_horse.Variant>;
  readonly INSTRUMENT: DataComponentType<j_net_minecraft_world_item_component.InstrumentComponent>;
  readonly INTANGIBLE_PROJECTILE: DataComponentType<j_net_minecraft_util.Unit>;
  readonly ITEM_MODEL: DataComponentType<j_net_minecraft_resources.ResourceLocation>;
  readonly ITEM_NAME: DataComponentType<j_net_minecraft_network_chat.Component>;
  readonly JUKEBOX_PLAYABLE: DataComponentType<j_net_minecraft_world_item.JukeboxPlayable>;
  readonly LLAMA_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal_horse.Llama_Variant>;
  readonly LOCK: DataComponentType<j_net_minecraft_world.LockCode>;
  readonly LODESTONE_TRACKER: DataComponentType<j_net_minecraft_world_item_component.LodestoneTracker>;
  readonly LORE: DataComponentType<j_net_minecraft_world_item_component.ItemLore>;
  readonly MAP_COLOR: DataComponentType<j_net_minecraft_world_item_component.MapItemColor>;
  readonly MAP_DECORATIONS: DataComponentType<j_net_minecraft_world_item_component.MapDecorations>;
  readonly MAP_ID: DataComponentType<j_net_minecraft_world_level_saveddata_maps.MapId>;
  readonly MAP_POST_PROCESSING: DataComponentType<j_net_minecraft_world_item_component.MapPostProcessing>;
  readonly MAX_DAMAGE: DataComponentType<number>;
  readonly MAX_STACK_SIZE: DataComponentType<number>;
  readonly MOOSHROOM_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal.MushroomCow_Variant>;
  readonly NOTE_BLOCK_SOUND: DataComponentType<j_net_minecraft_resources.ResourceLocation>;
  readonly OMINOUS_BOTTLE_AMPLIFIER: DataComponentType<j_net_minecraft_world_item_component.OminousBottleAmplifier>;
  readonly PAINTING_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_decoration.PaintingVariant>>;
  readonly PARROT_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal.Parrot_Variant>;
  readonly PIG_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.PigVariant>>;
  readonly POTION_CONTENTS: DataComponentType<j_net_minecraft_world_item_alchemy.PotionContents>;
  readonly POTION_DURATION_SCALE: DataComponentType<number>;
  readonly POT_DECORATIONS: DataComponentType<j_net_minecraft_world_level_block_entity.PotDecorations>;
  readonly PROFILE: DataComponentType<j_net_minecraft_world_item_component.ResolvableProfile>;
  readonly PROVIDES_BANNER_PATTERNS: DataComponentType<j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block_entity.BannerPattern>>;
  readonly PROVIDES_TRIM_MATERIAL: DataComponentType<j_net_minecraft_world_item_component.ProvidesTrimMaterial>;
  readonly RABBIT_VARIANT: DataComponentType<j_net_minecraft_world_entity_animal.Rabbit_Variant>;
  readonly RARITY: DataComponentType<j_net_minecraft_world_item.Rarity>;
  readonly RECIPES: DataComponentType<JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>>;
  readonly REPAIRABLE: DataComponentType<j_net_minecraft_world_item_enchantment.Repairable>;
  readonly REPAIR_COST: DataComponentType<number>;
  readonly SALMON_SIZE: DataComponentType<j_net_minecraft_world_entity_animal.Salmon_Variant>;
  readonly SHEEP_COLOR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly SHULKER_COLOR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly STORED_ENCHANTMENTS: DataComponentType<j_net_minecraft_world_item_enchantment.ItemEnchantments>;
  readonly SUSPICIOUS_STEW_EFFECTS: DataComponentType<j_net_minecraft_world_item_component.SuspiciousStewEffects>;
  readonly TOOL: DataComponentType<j_net_minecraft_world_item_component.Tool>;
  readonly TOOLTIP_DISPLAY: DataComponentType<j_net_minecraft_world_item_component.TooltipDisplay>;
  readonly TOOLTIP_STYLE: DataComponentType<j_net_minecraft_resources.ResourceLocation>;
  readonly TRIM: DataComponentType<j_net_minecraft_world_item_equipment_trim.ArmorTrim>;
  readonly TROPICAL_FISH_BASE_COLOR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly TROPICAL_FISH_PATTERN: DataComponentType<j_net_minecraft_world_entity_animal.TropicalFish_Pattern>;
  readonly TROPICAL_FISH_PATTERN_COLOR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly UNBREAKABLE: DataComponentType<j_net_minecraft_util.Unit>;
  readonly USE_COOLDOWN: DataComponentType<j_net_minecraft_world_item_component.UseCooldown>;
  readonly USE_REMAINDER: DataComponentType<j_net_minecraft_world_item_component.UseRemainder>;
  readonly VILLAGER_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_npc.VillagerType>>;
  readonly WEAPON: DataComponentType<j_net_minecraft_world_item_component.Weapon>;
  readonly WOLF_COLLAR: DataComponentType<j_net_minecraft_world_item.DyeColor>;
  readonly WOLF_SOUND_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant>>;
  readonly WOLF_VARIANT: DataComponentType<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfVariant>>;
  readonly WRITABLE_BOOK_CONTENT: DataComponentType<j_net_minecraft_world_item_component.WritableBookContent>;
  readonly WRITTEN_BOOK_CONTENT: DataComponentType<j_net_minecraft_world_item_component.WrittenBookContent>;
  bootstrap(arg0: j_net_minecraft_core.Registry<DataComponentType<object>>): DataComponentType<object>;
}

/** JVM interface net.minecraft.core.component.DataComponentType. */
export interface DataComponentTypeMembers<T = unknown> {
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]> | null;
  codecOrThrow(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  isTransient(): boolean;
  streamCodec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
}
export type DataComponentType<T = unknown> = DataComponentTypeMembers<T>;
export interface DataComponentTypeStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentType<object>]>;
  readonly PERSISTENT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DataComponentType<object>]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, DataComponentType<object>>;
  readonly VALUE_MAP_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<DataComponentType<object>, object>]>;
  builder<T>(): DataComponentType_Builder<T>;
}

/** JVM class net.minecraft.core.component.DataComponentType$Builder. */
export interface DataComponentType_BuilderMembers<T = unknown> {
  build(): DataComponentType<T>;
  cacheEncoding(): DataComponentType_Builder<T>;
  networkSynchronized(arg0: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): DataComponentType_Builder<T>;
  persistent(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): DataComponentType_Builder<T>;
}
export type DataComponentType_Builder<T = unknown> = DataComponentType_BuilderMembers<T>;
export interface DataComponentType_BuilderStatics {
  new<T>(): DataComponentType_Builder<T>;
}

/** JVM class net.minecraft.core.component.PatchedDataComponentMap. */
export interface PatchedDataComponentMapMembers {
  readonly __javaSupertypes?: readonly [DataComponentMap];
  applyPatch(arg0: DataComponentPatch): void;
  asPatch(): DataComponentPatch;
  clearPatch(): void;
  copy(): PatchedDataComponentMap;
  equals(arg0: object): boolean;
  get<T>(arg0: DataComponentType<T>): T | null;
  hasNonDefault(arg0: DataComponentType<object>): boolean;
  hashCode(): number;
  iterator(): JavaOpaque<"java.util.Iterator", [TypedDataComponent<object>]>;
  keySet(): JavaSet<DataComponentType<object>>;
  remove<T>(arg0: DataComponentType<T>): T | null;
  restorePatch(arg0: DataComponentPatch): void;
  set<T>(arg0: DataComponentType<T>, arg1: T | null): T | null;
  setAll(arg0: DataComponentMap): void;
  size(): number;
  toImmutableMap(): DataComponentMap;
  toString(): string;
}
export type PatchedDataComponentMap = PatchedDataComponentMapMembers & DataComponentMap;
export interface PatchedDataComponentMapStatics {
  new(arg0: DataComponentMap): PatchedDataComponentMap;
  fromPatch(arg0: DataComponentMap, arg1: DataComponentPatch): PatchedDataComponentMap;
}

/** JVM record net.minecraft.core.component.TypedDataComponent. */
export interface TypedDataComponentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  applyTo(arg0: PatchedDataComponentMap): void;
  encodeValue<D>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [D]>): JavaOpaque<"com.mojang.serialization.DataResult", [D]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  type(): DataComponentType<T>;
  value(): T;
}
export type TypedDataComponent<T = unknown> = TypedDataComponentMembers<T> & JavaOpaque<"java.lang.Record">;
export interface TypedDataComponentStatics {
  new<T>(arg0: DataComponentType<T>, arg1: T): TypedDataComponent<T>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, TypedDataComponent<object>>;
  createUnchecked<T>(arg0: DataComponentType<T>, arg1: object): TypedDataComponent<T>;
}
