// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_dialog from './io.papermc.paper.dialog.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_io_papermc_paper_registry_data_client from './io.papermc.paper.registry.data.client.generated.js';
import type * as j_io_papermc_paper_registry_data_dialog from './io.papermc.paper.registry.data.dialog.generated.js';
import type * as j_io_papermc_paper_registry_holder from './io.papermc.paper.registry.holder.generated.js';
import type * as j_io_papermc_paper_registry_set from './io.papermc.paper.registry.set.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block_banner from './org.bukkit.block.banner.generated.js';
import type * as j_org_bukkit_damage from './org.bukkit.damage.generated.js';
import type * as j_org_bukkit_enchantments from './org.bukkit.enchantments.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';

/** JVM interface io.papermc.paper.registry.data.BannerPatternRegistryEntry. */
export interface BannerPatternRegistryEntryMembers {
  assetId(): JavaOpaque<"net.kyori.adventure.key.Key">;
  translationKey(): string;
}
export type BannerPatternRegistryEntry = BannerPatternRegistryEntryMembers;
export interface BannerPatternRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.BannerPatternRegistryEntry$Builder. */
export interface BannerPatternRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [BannerPatternRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_block_banner.PatternType>];
  assetId(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): BannerPatternRegistryEntry_Builder;
  translationKey(arg0: string): BannerPatternRegistryEntry_Builder;
}
export type BannerPatternRegistryEntry_Builder = BannerPatternRegistryEntry_BuilderMembers & BannerPatternRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_block_banner.PatternType>;
export interface BannerPatternRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.CatTypeRegistryEntry. */
export interface CatTypeRegistryEntryMembers {
  clientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
}
export type CatTypeRegistryEntry = CatTypeRegistryEntryMembers;
export interface CatTypeRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.CatTypeRegistryEntry$Builder. */
export interface CatTypeRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [CatTypeRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Cat_Type>];
  clientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): CatTypeRegistryEntry_Builder;
}
export type CatTypeRegistryEntry_Builder = CatTypeRegistryEntry_BuilderMembers & CatTypeRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Cat_Type>;
export interface CatTypeRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.ChickenVariantRegistryEntry. */
export interface ChickenVariantRegistryEntryMembers {
  clientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
  model(): ChickenVariantRegistryEntry_Model;
}
export type ChickenVariantRegistryEntry = ChickenVariantRegistryEntryMembers;
export interface ChickenVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.ChickenVariantRegistryEntry$Builder. */
export interface ChickenVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [ChickenVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Chicken_Variant>];
  clientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): ChickenVariantRegistryEntry_Builder;
  model(arg0: ChickenVariantRegistryEntry_Model): ChickenVariantRegistryEntry_Builder;
}
export type ChickenVariantRegistryEntry_Builder = ChickenVariantRegistryEntry_BuilderMembers & ChickenVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Chicken_Variant>;
export interface ChickenVariantRegistryEntry_BuilderStatics {
}

/** Live JVM enum io.papermc.paper.registry.data.ChickenVariantRegistryEntry$Model; constants are host handles, not strings. */
export type ChickenVariantRegistryEntry_Model = JavaEnum<"io.papermc.paper.registry.data.ChickenVariantRegistryEntry$Model", "COLD" | "NORMAL"> & ChickenVariantRegistryEntry_ModelMembers;
export interface ChickenVariantRegistryEntry_ModelMembers {
}
export interface ChickenVariantRegistryEntry_ModelStatics {
  readonly COLD: ChickenVariantRegistryEntry_Model;
  readonly NORMAL: ChickenVariantRegistryEntry_Model;
  valueOf(arg0: string): ChickenVariantRegistryEntry_Model;
  values(): Array<ChickenVariantRegistryEntry_Model>;
}

/** JVM interface io.papermc.paper.registry.data.CowVariantRegistryEntry. */
export interface CowVariantRegistryEntryMembers {
  clientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
  model(): CowVariantRegistryEntry_Model;
}
export type CowVariantRegistryEntry = CowVariantRegistryEntryMembers;
export interface CowVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.CowVariantRegistryEntry$Builder. */
export interface CowVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [CowVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Cow_Variant>];
  clientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): CowVariantRegistryEntry_Builder;
  model(arg0: CowVariantRegistryEntry_Model): CowVariantRegistryEntry_Builder;
}
export type CowVariantRegistryEntry_Builder = CowVariantRegistryEntry_BuilderMembers & CowVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Cow_Variant>;
export interface CowVariantRegistryEntry_BuilderStatics {
}

/** Live JVM enum io.papermc.paper.registry.data.CowVariantRegistryEntry$Model; constants are host handles, not strings. */
export type CowVariantRegistryEntry_Model = JavaEnum<"io.papermc.paper.registry.data.CowVariantRegistryEntry$Model", "COLD" | "NORMAL" | "WARM"> & CowVariantRegistryEntry_ModelMembers;
export interface CowVariantRegistryEntry_ModelMembers {
}
export interface CowVariantRegistryEntry_ModelStatics {
  readonly COLD: CowVariantRegistryEntry_Model;
  readonly NORMAL: CowVariantRegistryEntry_Model;
  readonly WARM: CowVariantRegistryEntry_Model;
  valueOf(arg0: string): CowVariantRegistryEntry_Model;
  values(): Array<CowVariantRegistryEntry_Model>;
}

/** JVM interface io.papermc.paper.registry.data.DamageTypeRegistryEntry. */
export interface DamageTypeRegistryEntryMembers {
  damageEffect(): j_org_bukkit_damage.DamageEffect;
  damageScaling(): j_org_bukkit_damage.DamageScaling;
  deathMessageType(): j_org_bukkit_damage.DeathMessageType;
  exhaustion(): number;
  messageId(): string;
}
export type DamageTypeRegistryEntry = DamageTypeRegistryEntryMembers;
export interface DamageTypeRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.DamageTypeRegistryEntry$Builder. */
export interface DamageTypeRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [DamageTypeRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_damage.DamageType>];
  damageEffect(arg0: j_org_bukkit_damage.DamageEffect): DamageTypeRegistryEntry_Builder;
  damageScaling(arg0: j_org_bukkit_damage.DamageScaling): DamageTypeRegistryEntry_Builder;
  deathMessageType(arg0: j_org_bukkit_damage.DeathMessageType): DamageTypeRegistryEntry_Builder;
  exhaustion(arg0: number): DamageTypeRegistryEntry_Builder;
  messageId(arg0: string): DamageTypeRegistryEntry_Builder;
}
export type DamageTypeRegistryEntry_Builder = DamageTypeRegistryEntry_BuilderMembers & DamageTypeRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_damage.DamageType>;
export interface DamageTypeRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.EnchantmentRegistryEntry. */
export interface EnchantmentRegistryEntryMembers {
  activeSlots(): JavaList<j_org_bukkit_inventory.EquipmentSlotGroup>;
  anvilCost(): number;
  description(): j_net_kyori_adventure_text.Component;
  exclusiveWith(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_enchantments.Enchantment>;
  maxLevel(): number;
  maximumCost(): EnchantmentRegistryEntry_EnchantmentCost;
  minimumCost(): EnchantmentRegistryEntry_EnchantmentCost;
  primaryItems(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType> | null;
  supportedItems(): j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>;
  weight(): number;
}
export type EnchantmentRegistryEntry = EnchantmentRegistryEntryMembers;
export interface EnchantmentRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.EnchantmentRegistryEntry$Builder. */
export interface EnchantmentRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [EnchantmentRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_enchantments.Enchantment>];
  activeSlots(arg0: Iterable<j_org_bukkit_inventory.EquipmentSlotGroup>): EnchantmentRegistryEntry_Builder;
  activeSlots(...arg0: Array<j_org_bukkit_inventory.EquipmentSlotGroup>): EnchantmentRegistryEntry_Builder;
  anvilCost(arg0: number): EnchantmentRegistryEntry_Builder;
  description(arg0: j_net_kyori_adventure_text.Component): EnchantmentRegistryEntry_Builder;
  exclusiveWith(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_enchantments.Enchantment>): EnchantmentRegistryEntry_Builder;
  maxLevel(arg0: number): EnchantmentRegistryEntry_Builder;
  maximumCost(arg0: EnchantmentRegistryEntry_EnchantmentCost): EnchantmentRegistryEntry_Builder;
  minimumCost(arg0: EnchantmentRegistryEntry_EnchantmentCost): EnchantmentRegistryEntry_Builder;
  primaryItems(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>): EnchantmentRegistryEntry_Builder | null;
  supportedItems(arg0: j_io_papermc_paper_registry_set.RegistryKeySet<j_org_bukkit_inventory.ItemType>): EnchantmentRegistryEntry_Builder;
  weight(arg0: number): EnchantmentRegistryEntry_Builder;
}
export type EnchantmentRegistryEntry_Builder = EnchantmentRegistryEntry_BuilderMembers & EnchantmentRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_enchantments.Enchantment>;
export interface EnchantmentRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.EnchantmentRegistryEntry$EnchantmentCost. */
export interface EnchantmentRegistryEntry_EnchantmentCostMembers {
  additionalPerLevelCost(): number;
  baseCost(): number;
}
export type EnchantmentRegistryEntry_EnchantmentCost = EnchantmentRegistryEntry_EnchantmentCostMembers;
export interface EnchantmentRegistryEntry_EnchantmentCostStatics {
  of(arg0: number, arg1: number): EnchantmentRegistryEntry_EnchantmentCost;
}

/** JVM interface io.papermc.paper.registry.data.FrogVariantRegistryEntry. */
export interface FrogVariantRegistryEntryMembers {
  clientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
}
export type FrogVariantRegistryEntry = FrogVariantRegistryEntryMembers;
export interface FrogVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.FrogVariantRegistryEntry$Builder. */
export interface FrogVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [FrogVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Frog_Variant>];
  clientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): FrogVariantRegistryEntry_Builder;
}
export type FrogVariantRegistryEntry_Builder = FrogVariantRegistryEntry_BuilderMembers & FrogVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Frog_Variant>;
export interface FrogVariantRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.GameEventRegistryEntry. */
export interface GameEventRegistryEntryMembers {
  range(): number;
}
export type GameEventRegistryEntry = GameEventRegistryEntryMembers;
export interface GameEventRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.GameEventRegistryEntry$Builder. */
export interface GameEventRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [GameEventRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.GameEvent>];
  range(arg0: number): GameEventRegistryEntry_Builder;
}
export type GameEventRegistryEntry_Builder = GameEventRegistryEntry_BuilderMembers & GameEventRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.GameEvent>;
export interface GameEventRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.InlinedRegistryBuilderProvider. */
export interface InlinedRegistryBuilderProviderMembers {
  createDialog(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<j_io_papermc_paper_dialog.Dialog, j_io_papermc_paper_registry_data_dialog.DialogRegistryEntry_Builder>>): j_io_papermc_paper_dialog.Dialog;
  createInstrument(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<j_org_bukkit.MusicInstrument, InstrumentRegistryEntry_Builder>>): j_org_bukkit.MusicInstrument;
}
export type InlinedRegistryBuilderProvider = InlinedRegistryBuilderProviderMembers;
export interface InlinedRegistryBuilderProviderStatics {
  instance(): InlinedRegistryBuilderProvider;
}

/** JVM interface io.papermc.paper.registry.data.InstrumentRegistryEntry. */
export interface InstrumentRegistryEntryMembers {
  description(): j_net_kyori_adventure_text.Component;
  duration(): number;
  range(): number;
  soundEvent(): j_io_papermc_paper_registry_holder.RegistryHolder<j_org_bukkit.Sound_2, SoundEventRegistryEntry>;
}
export type InstrumentRegistryEntry = InstrumentRegistryEntryMembers;
export interface InstrumentRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.InstrumentRegistryEntry$Builder. */
export interface InstrumentRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [InstrumentRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.MusicInstrument>];
  description(arg0: j_net_kyori_adventure_text.Component): InstrumentRegistryEntry_Builder;
  duration(arg0: number): InstrumentRegistryEntry_Builder;
  range(arg0: number): InstrumentRegistryEntry_Builder;
  soundEvent(arg0: j_io_papermc_paper_registry.TypedKey<j_org_bukkit.Sound_2>): InstrumentRegistryEntry_Builder;
  soundEvent(arg0: j_io_papermc_paper_registry_holder.RegistryHolder<j_org_bukkit.Sound_2, SoundEventRegistryEntry>): InstrumentRegistryEntry_Builder;
  soundEvent(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<j_org_bukkit.Sound_2, SoundEventRegistryEntry_Builder>>): InstrumentRegistryEntry_Builder;
}
export type InstrumentRegistryEntry_Builder = InstrumentRegistryEntry_BuilderMembers & InstrumentRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.MusicInstrument>;
export interface InstrumentRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.JukeboxSongRegistryEntry. */
export interface JukeboxSongRegistryEntryMembers {
  comparatorOutput(): number;
  description(): j_net_kyori_adventure_text.Component;
  lengthInSeconds(): number;
  soundEvent(): j_io_papermc_paper_registry_holder.RegistryHolder<j_org_bukkit.Sound_2, SoundEventRegistryEntry>;
}
export type JukeboxSongRegistryEntry = JukeboxSongRegistryEntryMembers;
export interface JukeboxSongRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.JukeboxSongRegistryEntry$Builder. */
export interface JukeboxSongRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [JukeboxSongRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.JukeboxSong>];
  comparatorOutput(arg0: number): JukeboxSongRegistryEntry_Builder;
  description(arg0: j_net_kyori_adventure_text.Component): JukeboxSongRegistryEntry_Builder;
  lengthInSeconds(arg0: number): JukeboxSongRegistryEntry_Builder;
  soundEvent(arg0: j_io_papermc_paper_registry.TypedKey<j_org_bukkit.Sound_2>): JukeboxSongRegistryEntry_Builder;
  soundEvent(arg0: j_io_papermc_paper_registry_holder.RegistryHolder<j_org_bukkit.Sound_2, SoundEventRegistryEntry>): JukeboxSongRegistryEntry_Builder;
  soundEvent(arg0: JavaConsumer<j_io_papermc_paper_registry.RegistryBuilderFactory<j_org_bukkit.Sound_2, SoundEventRegistryEntry_Builder>>): JukeboxSongRegistryEntry_Builder;
}
export type JukeboxSongRegistryEntry_Builder = JukeboxSongRegistryEntry_BuilderMembers & JukeboxSongRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.JukeboxSong>;
export interface JukeboxSongRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.PaintingVariantRegistryEntry. */
export interface PaintingVariantRegistryEntryMembers {
  assetId(): JavaOpaque<"net.kyori.adventure.key.Key">;
  author(): j_net_kyori_adventure_text.Component | null;
  height(): number;
  title(): j_net_kyori_adventure_text.Component | null;
  width(): number;
}
export type PaintingVariantRegistryEntry = PaintingVariantRegistryEntryMembers;
export interface PaintingVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.PaintingVariantRegistryEntry$Builder. */
export interface PaintingVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [PaintingVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.Art>];
  assetId(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): PaintingVariantRegistryEntry_Builder;
  author(arg0: j_net_kyori_adventure_text.Component): PaintingVariantRegistryEntry_Builder | null;
  height(arg0: number): PaintingVariantRegistryEntry_Builder;
  title(arg0: j_net_kyori_adventure_text.Component): PaintingVariantRegistryEntry_Builder | null;
  width(arg0: number): PaintingVariantRegistryEntry_Builder;
}
export type PaintingVariantRegistryEntry_Builder = PaintingVariantRegistryEntry_BuilderMembers & PaintingVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.Art>;
export interface PaintingVariantRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.PigVariantRegistryEntry. */
export interface PigVariantRegistryEntryMembers {
  clientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
  model(): PigVariantRegistryEntry_Model;
}
export type PigVariantRegistryEntry = PigVariantRegistryEntryMembers;
export interface PigVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.PigVariantRegistryEntry$Builder. */
export interface PigVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [PigVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Pig_Variant>];
  clientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): PigVariantRegistryEntry_Builder;
  model(arg0: PigVariantRegistryEntry_Model): PigVariantRegistryEntry_Builder;
}
export type PigVariantRegistryEntry_Builder = PigVariantRegistryEntry_BuilderMembers & PigVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Pig_Variant>;
export interface PigVariantRegistryEntry_BuilderStatics {
}

/** Live JVM enum io.papermc.paper.registry.data.PigVariantRegistryEntry$Model; constants are host handles, not strings. */
export type PigVariantRegistryEntry_Model = JavaEnum<"io.papermc.paper.registry.data.PigVariantRegistryEntry$Model", "COLD" | "NORMAL"> & PigVariantRegistryEntry_ModelMembers;
export interface PigVariantRegistryEntry_ModelMembers {
}
export interface PigVariantRegistryEntry_ModelStatics {
  readonly COLD: PigVariantRegistryEntry_Model;
  readonly NORMAL: PigVariantRegistryEntry_Model;
  valueOf(arg0: string): PigVariantRegistryEntry_Model;
  values(): Array<PigVariantRegistryEntry_Model>;
}

/** JVM interface io.papermc.paper.registry.data.SoundEventRegistryEntry. */
export interface SoundEventRegistryEntryMembers {
  fixedRange(): number | null;
  location(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type SoundEventRegistryEntry = SoundEventRegistryEntryMembers;
export interface SoundEventRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.SoundEventRegistryEntry$Builder. */
export interface SoundEventRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [SoundEventRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.Sound_2>];
  fixedRange(arg0: number): SoundEventRegistryEntry_Builder | null;
  location(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): SoundEventRegistryEntry_Builder;
}
export type SoundEventRegistryEntry_Builder = SoundEventRegistryEntry_BuilderMembers & SoundEventRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit.Sound_2>;
export interface SoundEventRegistryEntry_BuilderStatics {
}

/** JVM interface io.papermc.paper.registry.data.WolfVariantRegistryEntry. */
export interface WolfVariantRegistryEntryMembers {
  angryClientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
  tameClientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
  wildClientTextureAsset(): j_io_papermc_paper_registry_data_client.ClientTextureAsset;
}
export type WolfVariantRegistryEntry = WolfVariantRegistryEntryMembers;
export interface WolfVariantRegistryEntryStatics {
}

/** JVM interface io.papermc.paper.registry.data.WolfVariantRegistryEntry$Builder. */
export interface WolfVariantRegistryEntry_BuilderMembers {
  readonly __javaSupertypes?: readonly [WolfVariantRegistryEntry, j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Wolf_Variant>];
  angryClientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): WolfVariantRegistryEntry_Builder;
  tameClientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): WolfVariantRegistryEntry_Builder;
  wildClientTextureAsset(arg0: j_io_papermc_paper_registry_data_client.ClientTextureAsset): WolfVariantRegistryEntry_Builder;
}
export type WolfVariantRegistryEntry_Builder = WolfVariantRegistryEntry_BuilderMembers & WolfVariantRegistryEntry & j_io_papermc_paper_registry.RegistryBuilder<j_org_bukkit_entity.Wolf_Variant>;
export interface WolfVariantRegistryEntry_BuilderStatics {
}
