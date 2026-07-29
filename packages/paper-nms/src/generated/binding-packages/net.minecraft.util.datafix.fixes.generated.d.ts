// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';

/** JVM class net.minecraft.util.datafix.fixes.AbstractArrowPickupFix. */
export interface AbstractArrowPickupFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AbstractArrowPickupFix = AbstractArrowPickupFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AbstractArrowPickupFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): AbstractArrowPickupFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.AbstractBlockPropertyFix. */
export interface AbstractBlockPropertyFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AbstractBlockPropertyFix = AbstractBlockPropertyFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AbstractBlockPropertyFixStatics {
}

/** JVM abstract net.minecraft.util.datafix.fixes.AbstractPoiSectionFix. */
export interface AbstractPoiSectionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AbstractPoiSectionFix = AbstractPoiSectionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AbstractPoiSectionFixStatics {
}

/** JVM abstract net.minecraft.util.datafix.fixes.AbstractUUIDFix. */
export interface AbstractUUIDFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AbstractUUIDFix = AbstractUUIDFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AbstractUUIDFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.AddFlagIfNotPresentFix. */
export interface AddFlagIfNotPresentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AddFlagIfNotPresentFix = AddFlagIfNotPresentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AddFlagIfNotPresentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg2: string, arg3: boolean): AddFlagIfNotPresentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AddNewChoices. */
export interface AddNewChoicesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type AddNewChoices = AddNewChoicesMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AddNewChoicesStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">): AddNewChoices;
}

/** JVM class net.minecraft.util.datafix.fixes.AdvancementsFix. */
export interface AdvancementsFixMembers {
  readonly __javaSupertypes?: readonly [AdvancementsRenameFix];
}
export type AdvancementsFix = AdvancementsFixMembers & AdvancementsRenameFix;
export interface AdvancementsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): AdvancementsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AdvancementsRenameFix. */
export interface AdvancementsRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AdvancementsRenameFix = AdvancementsRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AdvancementsRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean, arg2: string, arg3: JavaFunction<string, string>): AdvancementsRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AreaEffectCloudDurationScaleFix. */
export interface AreaEffectCloudDurationScaleFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type AreaEffectCloudDurationScaleFix = AreaEffectCloudDurationScaleFixMembers & NamedEntityFix;
export interface AreaEffectCloudDurationScaleFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): AreaEffectCloudDurationScaleFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AreaEffectCloudPotionFix. */
export interface AreaEffectCloudPotionFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type AreaEffectCloudPotionFix = AreaEffectCloudPotionFixMembers & NamedEntityFix;
export interface AreaEffectCloudPotionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): AreaEffectCloudPotionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AttributeIdPrefixFix. */
export interface AttributeIdPrefixFixMembers {
  readonly __javaSupertypes?: readonly [AttributesRenameFix];
}
export type AttributeIdPrefixFix = AttributeIdPrefixFixMembers & AttributesRenameFix;
export interface AttributeIdPrefixFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): AttributeIdPrefixFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AttributeModifierIdFix. */
export interface AttributeModifierIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AttributeModifierIdFix = AttributeModifierIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AttributeModifierIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): AttributeModifierIdFix;
  uuidFromIntArray(arg0: Array<number>): JavaOpaque<"java.util.UUID"> | null;
}

/** JVM class net.minecraft.util.datafix.fixes.AttributesRenameFix. */
export interface AttributesRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AttributesRenameFix = AttributesRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AttributesRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): AttributesRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.AttributesRenameLegacy. */
export interface AttributesRenameLegacyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type AttributesRenameLegacy = AttributesRenameLegacyMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface AttributesRenameLegacyStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): AttributesRenameLegacy;
}

/** JVM class net.minecraft.util.datafix.fixes.BannerEntityCustomNameToOverrideComponentFix. */
export interface BannerEntityCustomNameToOverrideComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BannerEntityCustomNameToOverrideComponentFix = BannerEntityCustomNameToOverrideComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BannerEntityCustomNameToOverrideComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BannerEntityCustomNameToOverrideComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BannerPatternFormatFix. */
export interface BannerPatternFormatFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type BannerPatternFormatFix = BannerPatternFormatFixMembers & NamedEntityFix;
export interface BannerPatternFormatFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BannerPatternFormatFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BedItemColorFix. */
export interface BedItemColorFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BedItemColorFix = BedItemColorFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BedItemColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BedItemColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BeehiveFieldRenameFix. */
export interface BeehiveFieldRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BeehiveFieldRenameFix = BeehiveFieldRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BeehiveFieldRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BeehiveFieldRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BiomeFix. */
export interface BiomeFixMembers {
}
export type BiomeFix = BiomeFixMembers;
export interface BiomeFixStatics {
  new(): BiomeFix;
  readonly BIOMES: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.BitStorageAlignFix. */
export interface BitStorageAlignFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type BitStorageAlignFix = BitStorageAlignFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BitStorageAlignFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BitStorageAlignFix;
  addPadding(arg0: number, arg1: number, arg2: Array<bigint>): Array<bigint>;
}

/** JVM class net.minecraft.util.datafix.fixes.BlendingDataFix. */
export interface BlendingDataFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type BlendingDataFix = BlendingDataFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlendingDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BlendingDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlendingDataRemoveFromNetherEndFix. */
export interface BlendingDataRemoveFromNetherEndFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type BlendingDataRemoveFromNetherEndFix = BlendingDataRemoveFromNetherEndFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlendingDataRemoveFromNetherEndFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BlendingDataRemoveFromNetherEndFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityBannerColorFix. */
export interface BlockEntityBannerColorFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type BlockEntityBannerColorFix = BlockEntityBannerColorFixMembers & NamedEntityFix;
export interface BlockEntityBannerColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityBannerColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityBlockStateFix. */
export interface BlockEntityBlockStateFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type BlockEntityBlockStateFix = BlockEntityBlockStateFixMembers & NamedEntityFix;
export interface BlockEntityBlockStateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityBlockStateFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityCustomNameToComponentFix. */
export interface BlockEntityCustomNameToComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockEntityCustomNameToComponentFix = BlockEntityCustomNameToComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockEntityCustomNameToComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BlockEntityCustomNameToComponentFix;
  fixTagCustomName<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]>;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityFurnaceBurnTimeFix. */
export interface BlockEntityFurnaceBurnTimeFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixBurnTime(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type BlockEntityFurnaceBurnTimeFix = BlockEntityFurnaceBurnTimeFixMembers & NamedEntityFix;
export interface BlockEntityFurnaceBurnTimeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string): BlockEntityFurnaceBurnTimeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityIdFix. */
export interface BlockEntityIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockEntityIdFix = BlockEntityIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockEntityIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityIdFix;
  readonly ID_MAP: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityJukeboxFix. */
export interface BlockEntityJukeboxFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type BlockEntityJukeboxFix = BlockEntityJukeboxFixMembers & NamedEntityFix;
export interface BlockEntityJukeboxFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityJukeboxFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityKeepPacked. */
export interface BlockEntityKeepPackedMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type BlockEntityKeepPacked = BlockEntityKeepPackedMembers & NamedEntityFix;
export interface BlockEntityKeepPackedStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityKeepPacked;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityRenameFix. */
export interface BlockEntityRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockEntityRenameFix = BlockEntityRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockEntityRenameFixStatics {
  create(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): JavaOpaque<"com.mojang.datafixers.DataFix">;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityShulkerBoxColorFix. */
export interface BlockEntityShulkerBoxColorFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type BlockEntityShulkerBoxColorFix = BlockEntityShulkerBoxColorFixMembers & NamedEntityFix;
export interface BlockEntityShulkerBoxColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockEntityShulkerBoxColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntitySignDoubleSidedEditableTextFix. */
export interface BlockEntitySignDoubleSidedEditableTextFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type BlockEntitySignDoubleSidedEditableTextFix = BlockEntitySignDoubleSidedEditableTextFixMembers & NamedEntityWriteReadFix;
export interface BlockEntitySignDoubleSidedEditableTextFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string): BlockEntitySignDoubleSidedEditableTextFix;
  readonly FIELDS_TO_DROP: JavaList<string>;
  readonly FILTERED_CORRECT: "_filtered_correct";
}

/** JVM class net.minecraft.util.datafix.fixes.BlockEntityUUIDFix. */
export interface BlockEntityUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
}
export type BlockEntityUUIDFix = BlockEntityUUIDFixMembers & AbstractUUIDFix;
export interface BlockEntityUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BlockEntityUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockNameFlatteningFix. */
export interface BlockNameFlatteningFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockNameFlatteningFix = BlockNameFlatteningFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockNameFlatteningFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockNameFlatteningFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockPosFormatAndRenamesFix. */
export interface BlockPosFormatAndRenamesFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockPosFormatAndRenamesFix = BlockPosFormatAndRenamesFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockPosFormatAndRenamesFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BlockPosFormatAndRenamesFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockPropertyRenameAndFix. */
export interface BlockPropertyRenameAndFixMembers {
  readonly __javaSupertypes?: readonly [AbstractBlockPropertyFix];
}
export type BlockPropertyRenameAndFix = BlockPropertyRenameAndFixMembers & AbstractBlockPropertyFix;
export interface BlockPropertyRenameAndFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string, arg3: string, arg4: string, arg5: JavaOpaque<"java.util.function.UnaryOperator", [string]>): BlockPropertyRenameAndFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.BlockRenameFix. */
export interface BlockRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockRenameFix = BlockRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockRenameFixStatics {
  create(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaFunction<string, string>): JavaOpaque<"com.mojang.datafixers.DataFix">;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockStateData. */
export interface BlockStateDataMembers {
}
export type BlockStateData = BlockStateDataMembers;
export interface BlockStateDataStatics {
  new(): BlockStateData;
  getTag(arg0: number): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  register(arg0: number, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, ...arg2: Array<JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>): void;
  upgradeBlock(arg0: number): string;
  upgradeBlock(arg0: string): string;
  upgradeBlockStateTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}

/** JVM class net.minecraft.util.datafix.fixes.BlockStateStructureTemplateFix. */
export interface BlockStateStructureTemplateFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BlockStateStructureTemplateFix = BlockStateStructureTemplateFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BlockStateStructureTemplateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): BlockStateStructureTemplateFix;
}

/** JVM class net.minecraft.util.datafix.fixes.BoatSplitFix. */
export interface BoatSplitFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type BoatSplitFix = BoatSplitFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface BoatSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): BoatSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CarvingStepRemoveFix. */
export interface CarvingStepRemoveFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type CarvingStepRemoveFix = CarvingStepRemoveFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface CarvingStepRemoveFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): CarvingStepRemoveFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CatTypeFix. */
export interface CatTypeFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type CatTypeFix = CatTypeFixMembers & NamedEntityFix;
export interface CatTypeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): CatTypeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CauldronRenameFix. */
export interface CauldronRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type CauldronRenameFix = CauldronRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface CauldronRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): CauldronRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CavesAndCliffsRenames. */
export interface CavesAndCliffsRenamesMembers {
}
export type CavesAndCliffsRenames = CavesAndCliffsRenamesMembers;
export interface CavesAndCliffsRenamesStatics {
  readonly RENAMES: JavaOpaque<"com.google.common.collect.ImmutableMap", [string, string]>;
}

/** JVM class net.minecraft.util.datafix.fixes.ChestedHorsesInventoryZeroIndexingFix. */
export interface ChestedHorsesInventoryZeroIndexingFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChestedHorsesInventoryZeroIndexingFix = ChestedHorsesInventoryZeroIndexingFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChestedHorsesInventoryZeroIndexingFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChestedHorsesInventoryZeroIndexingFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkBedBlockEntityInjecterFix. */
export interface ChunkBedBlockEntityInjecterFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ChunkBedBlockEntityInjecterFix = ChunkBedBlockEntityInjecterFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkBedBlockEntityInjecterFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkBedBlockEntityInjecterFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkBiomeFix. */
export interface ChunkBiomeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkBiomeFix = ChunkBiomeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkBiomeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkBiomeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkDeleteIgnoredLightDataFix. */
export interface ChunkDeleteIgnoredLightDataFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkDeleteIgnoredLightDataFix = ChunkDeleteIgnoredLightDataFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkDeleteIgnoredLightDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkDeleteIgnoredLightDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkDeleteLightFix. */
export interface ChunkDeleteLightFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkDeleteLightFix = ChunkDeleteLightFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkDeleteLightFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkDeleteLightFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkHeightAndBiomeFix. */
export interface ChunkHeightAndBiomeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkHeightAndBiomeFix = ChunkHeightAndBiomeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkHeightAndBiomeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkHeightAndBiomeFix;
  readonly BLOCKS_PER_SECTION: 4096;
  readonly DATAFIXER_CONTEXT_TAG: "__context";
  readonly DEFAULT_BIOME: "minecraft:plains";
  ceillog2(arg0: number): number;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkLightRemoveFix. */
export interface ChunkLightRemoveFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkLightRemoveFix = ChunkLightRemoveFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkLightRemoveFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkLightRemoveFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix. */
export interface ChunkPalettedStorageFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ChunkPalettedStorageFix = ChunkPalettedStorageFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkPalettedStorageFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkPalettedStorageFix;
  getName(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): string;
  getProperty(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>, arg1: string): string;
  getSideMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): number;
  idFor(arg0: j_net_minecraft_util.CrudeIncrementalIntIdentityHashBiMap<JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>, arg1: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): number;
}

/** Live JVM enum net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction; constants are host handles, not strings. */
export type ChunkPalettedStorageFix_Direction = JavaEnum<"net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction", "DOWN" | "EAST" | "NORTH" | "SOUTH" | "UP" | "WEST"> & ChunkPalettedStorageFix_DirectionMembers;
export interface ChunkPalettedStorageFix_DirectionMembers {
  getAxis(): ChunkPalettedStorageFix_Direction_Axis;
  getAxisDirection(): ChunkPalettedStorageFix_Direction_AxisDirection;
}
export interface ChunkPalettedStorageFix_DirectionStatics {
  readonly DOWN: ChunkPalettedStorageFix_Direction;
  readonly EAST: ChunkPalettedStorageFix_Direction;
  readonly NORTH: ChunkPalettedStorageFix_Direction;
  readonly SOUTH: ChunkPalettedStorageFix_Direction;
  readonly UP: ChunkPalettedStorageFix_Direction;
  readonly WEST: ChunkPalettedStorageFix_Direction;
  valueOf(arg0: string): ChunkPalettedStorageFix_Direction;
  values(): Array<ChunkPalettedStorageFix_Direction>;
}

/** Live JVM enum net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction$Axis; constants are host handles, not strings. */
export type ChunkPalettedStorageFix_Direction_Axis = JavaEnum<"net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction$Axis", "X" | "Y" | "Z"> & ChunkPalettedStorageFix_Direction_AxisMembers;
export interface ChunkPalettedStorageFix_Direction_AxisMembers {
}
export interface ChunkPalettedStorageFix_Direction_AxisStatics {
  readonly X: ChunkPalettedStorageFix_Direction_Axis;
  readonly Y: ChunkPalettedStorageFix_Direction_Axis;
  readonly Z: ChunkPalettedStorageFix_Direction_Axis;
  valueOf(arg0: string): ChunkPalettedStorageFix_Direction_Axis;
  values(): Array<ChunkPalettedStorageFix_Direction_Axis>;
}

/** Live JVM enum net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction$AxisDirection; constants are host handles, not strings. */
export type ChunkPalettedStorageFix_Direction_AxisDirection = JavaEnum<"net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix$Direction$AxisDirection", "NEGATIVE" | "POSITIVE"> & ChunkPalettedStorageFix_Direction_AxisDirectionMembers;
export interface ChunkPalettedStorageFix_Direction_AxisDirectionMembers {
  getStep(): number;
}
export interface ChunkPalettedStorageFix_Direction_AxisDirectionStatics {
  readonly NEGATIVE: ChunkPalettedStorageFix_Direction_AxisDirection;
  readonly POSITIVE: ChunkPalettedStorageFix_Direction_AxisDirection;
  valueOf(arg0: string): ChunkPalettedStorageFix_Direction_AxisDirection;
  values(): Array<ChunkPalettedStorageFix_Direction_AxisDirection>;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkProtoTickListFix. */
export interface ChunkProtoTickListFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkProtoTickListFix = ChunkProtoTickListFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkProtoTickListFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkProtoTickListFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkProtoTickListFix$PoorMansPalettedContainer. */
export interface ChunkProtoTickListFix_PoorMansPalettedContainerMembers {
  data(): Array<bigint>;
  get(arg0: number, arg1: number, arg2: number): JavaOpaque<"com.mojang.serialization.Dynamic", [object]> | null;
  palette(): JavaList<JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>;
}
export type ChunkProtoTickListFix_PoorMansPalettedContainer = ChunkProtoTickListFix_PoorMansPalettedContainerMembers;
export interface ChunkProtoTickListFix_PoorMansPalettedContainerStatics {
  new(arg0: JavaList<JavaOpaque<"com.mojang.serialization.Dynamic", [object]>>, arg1: Array<bigint>): ChunkProtoTickListFix_PoorMansPalettedContainer;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkRenamesFix. */
export interface ChunkRenamesFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkRenamesFix = ChunkRenamesFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkRenamesFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkRenamesFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkStatusFix. */
export interface ChunkStatusFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkStatusFix = ChunkStatusFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkStatusFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkStatusFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkStatusFix2. */
export interface ChunkStatusFix2Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkStatusFix2 = ChunkStatusFix2Members & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkStatusFix2Statics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkStatusFix2;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkStructuresTemplateRenameFix. */
export interface ChunkStructuresTemplateRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ChunkStructuresTemplateRenameFix = ChunkStructuresTemplateRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkStructuresTemplateRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkStructuresTemplateRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkTicketUnpackPosFix. */
export interface ChunkTicketUnpackPosFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ChunkTicketUnpackPosFix = ChunkTicketUnpackPosFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkTicketUnpackPosFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ChunkTicketUnpackPosFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ChunkToProtochunkFix. */
export interface ChunkToProtochunkFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ChunkToProtochunkFix = ChunkToProtochunkFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ChunkToProtochunkFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ChunkToProtochunkFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ColorlessShulkerEntityFix. */
export interface ColorlessShulkerEntityFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type ColorlessShulkerEntityFix = ColorlessShulkerEntityFixMembers & NamedEntityFix;
export interface ColorlessShulkerEntityFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ColorlessShulkerEntityFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ContainerBlockEntityLockPredicateFix. */
export interface ContainerBlockEntityLockPredicateFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ContainerBlockEntityLockPredicateFix = ContainerBlockEntityLockPredicateFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ContainerBlockEntityLockPredicateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ContainerBlockEntityLockPredicateFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CriteriaRenameFix. */
export interface CriteriaRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type CriteriaRenameFix = CriteriaRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface CriteriaRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string, arg3: JavaOpaque<"java.util.function.UnaryOperator", [string]>): CriteriaRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.CustomModelDataExpandFix. */
export interface CustomModelDataExpandFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type CustomModelDataExpandFix = CustomModelDataExpandFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface CustomModelDataExpandFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): CustomModelDataExpandFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.DataComponentRemainderFix. */
export interface DataComponentRemainderFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type DataComponentRemainderFix = DataComponentRemainderFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface DataComponentRemainderFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.DecoratedPotFieldRenameFix. */
export interface DecoratedPotFieldRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type DecoratedPotFieldRenameFix = DecoratedPotFieldRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface DecoratedPotFieldRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): DecoratedPotFieldRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.DropChancesFormatFix. */
export interface DropChancesFormatFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type DropChancesFormatFix = DropChancesFormatFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface DropChancesFormatFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): DropChancesFormatFix;
}

/** JVM class net.minecraft.util.datafix.fixes.DropInvalidSignDataFix. */
export interface DropInvalidSignDataFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type DropInvalidSignDataFix = DropInvalidSignDataFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface DropInvalidSignDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string): DropInvalidSignDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.DyeItemRenameFix. */
export interface DyeItemRenameFixMembers {
}
export type DyeItemRenameFix = DyeItemRenameFixMembers;
export interface DyeItemRenameFixStatics {
  new(): DyeItemRenameFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EffectDurationFix. */
export interface EffectDurationFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type EffectDurationFix = EffectDurationFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EffectDurationFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EffectDurationFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EmptyItemInHotbarFix. */
export interface EmptyItemInHotbarFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EmptyItemInHotbarFix = EmptyItemInHotbarFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EmptyItemInHotbarFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EmptyItemInHotbarFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EmptyItemInVillagerTradeFix. */
export interface EmptyItemInVillagerTradeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EmptyItemInVillagerTradeFix = EmptyItemInVillagerTradeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EmptyItemInVillagerTradeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EmptyItemInVillagerTradeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityArmorStandSilentFix. */
export interface EntityArmorStandSilentFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityArmorStandSilentFix = EntityArmorStandSilentFixMembers & NamedEntityFix;
export interface EntityArmorStandSilentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityArmorStandSilentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityAttributeBaseValueFix. */
export interface EntityAttributeBaseValueFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type EntityAttributeBaseValueFix = EntityAttributeBaseValueFixMembers & NamedEntityFix;
export interface EntityAttributeBaseValueFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string, arg3: string, arg4: JavaOpaque<"java.util.function.DoubleUnaryOperator">): EntityAttributeBaseValueFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityBlockStateFix. */
export interface EntityBlockStateFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityBlockStateFix = EntityBlockStateFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityBlockStateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityBlockStateFix;
  getBlockId(arg0: string): number;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityBrushableBlockFieldsRenameFix. */
export interface EntityBrushableBlockFieldsRenameFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityBrushableBlockFieldsRenameFix = EntityBrushableBlockFieldsRenameFixMembers & NamedEntityFix;
export interface EntityBrushableBlockFieldsRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityBrushableBlockFieldsRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityCatSplitFix. */
export interface EntityCatSplitFixMembers {
  readonly __javaSupertypes?: readonly [SimpleEntityRenameFix];
}
export type EntityCatSplitFix = EntityCatSplitFixMembers & SimpleEntityRenameFix;
export interface EntityCatSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityCatSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityCodSalmonFix. */
export interface EntityCodSalmonFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityCodSalmonFix = EntityCodSalmonFixMembers & SimplestEntityRenameFix;
export interface EntityCodSalmonFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityCodSalmonFix;
  readonly RENAMED_EGG_IDS: JavaMap<string, string>;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityCustomNameToComponentFix. */
export interface EntityCustomNameToComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityCustomNameToComponentFix = EntityCustomNameToComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityCustomNameToComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityCustomNameToComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityElderGuardianSplitFix. */
export interface EntityElderGuardianSplitFixMembers {
  readonly __javaSupertypes?: readonly [SimpleEntityRenameFix];
}
export type EntityElderGuardianSplitFix = EntityElderGuardianSplitFixMembers & SimpleEntityRenameFix;
export interface EntityElderGuardianSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityElderGuardianSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityEquipmentToArmorAndHandFix. */
export interface EntityEquipmentToArmorAndHandFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityEquipmentToArmorAndHandFix = EntityEquipmentToArmorAndHandFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityEquipmentToArmorAndHandFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityEquipmentToArmorAndHandFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityFallDistanceFloatToDoubleFix. */
export interface EntityFallDistanceFloatToDoubleFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type EntityFallDistanceFloatToDoubleFix = EntityFallDistanceFloatToDoubleFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityFallDistanceFloatToDoubleFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">): EntityFallDistanceFloatToDoubleFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityFieldsRenameFix. */
export interface EntityFieldsRenameFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityFieldsRenameFix = EntityFieldsRenameFixMembers & NamedEntityFix;
export interface EntityFieldsRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string, arg3: JavaMap<string, string>): EntityFieldsRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityGoatMissingStateFix. */
export interface EntityGoatMissingStateFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type EntityGoatMissingStateFix = EntityGoatMissingStateFixMembers & NamedEntityFix;
export interface EntityGoatMissingStateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityGoatMissingStateFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityHealthFix. */
export interface EntityHealthFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityHealthFix = EntityHealthFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityHealthFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityHealthFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityHorseSaddleFix. */
export interface EntityHorseSaddleFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type EntityHorseSaddleFix = EntityHorseSaddleFixMembers & NamedEntityFix;
export interface EntityHorseSaddleFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityHorseSaddleFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityHorseSplitFix. */
export interface EntityHorseSplitFixMembers {
  readonly __javaSupertypes?: readonly [EntityRenameFix];
}
export type EntityHorseSplitFix = EntityHorseSplitFixMembers & EntityRenameFix;
export interface EntityHorseSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityHorseSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityIdFix. */
export interface EntityIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityIdFix = EntityIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityItemFrameDirectionFix. */
export interface EntityItemFrameDirectionFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityItemFrameDirectionFix = EntityItemFrameDirectionFixMembers & NamedEntityFix;
export interface EntityItemFrameDirectionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityItemFrameDirectionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityMinecartIdentifiersFix. */
export interface EntityMinecartIdentifiersFixMembers {
  readonly __javaSupertypes?: readonly [EntityRenameFix];
}
export type EntityMinecartIdentifiersFix = EntityMinecartIdentifiersFixMembers & EntityRenameFix;
export interface EntityMinecartIdentifiersFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityMinecartIdentifiersFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityPaintingItemFrameDirectionFix. */
export interface EntityPaintingItemFrameDirectionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityPaintingItemFrameDirectionFix = EntityPaintingItemFrameDirectionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityPaintingItemFrameDirectionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityPaintingItemFrameDirectionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityPaintingMotiveFix. */
export interface EntityPaintingMotiveFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityPaintingMotiveFix = EntityPaintingMotiveFixMembers & NamedEntityFix;
export interface EntityPaintingMotiveFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityPaintingMotiveFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityProjectileOwnerFix. */
export interface EntityProjectileOwnerFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type EntityProjectileOwnerFix = EntityProjectileOwnerFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityProjectileOwnerFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityProjectileOwnerFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityPufferfishRenameFix. */
export interface EntityPufferfishRenameFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityPufferfishRenameFix = EntityPufferfishRenameFixMembers & SimplestEntityRenameFix;
export interface EntityPufferfishRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityPufferfishRenameFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityRavagerRenameFix. */
export interface EntityRavagerRenameFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityRavagerRenameFix = EntityRavagerRenameFixMembers & SimplestEntityRenameFix;
export interface EntityRavagerRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityRavagerRenameFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityRedundantChanceTagsFix. */
export interface EntityRedundantChanceTagsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityRedundantChanceTagsFix = EntityRedundantChanceTagsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityRedundantChanceTagsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityRedundantChanceTagsFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.EntityRenameFix. */
export interface EntityRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityRenameFix = EntityRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityRenameFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.EntityRidingToPassengersFix. */
export interface EntityRidingToPassengersFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityRidingToPassengersFix = EntityRidingToPassengersFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityRidingToPassengersFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityRidingToPassengersFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntitySalmonSizeFix. */
export interface EntitySalmonSizeFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type EntitySalmonSizeFix = EntitySalmonSizeFixMembers & NamedEntityFix;
export interface EntitySalmonSizeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntitySalmonSizeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityShulkerColorFix. */
export interface EntityShulkerColorFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityShulkerColorFix = EntityShulkerColorFixMembers & NamedEntityFix;
export interface EntityShulkerColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityShulkerColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityShulkerRotationFix. */
export interface EntityShulkerRotationFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityShulkerRotationFix = EntityShulkerRotationFixMembers & NamedEntityFix;
export interface EntityShulkerRotationFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityShulkerRotationFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntitySkeletonSplitFix. */
export interface EntitySkeletonSplitFixMembers {
  readonly __javaSupertypes?: readonly [SimpleEntityRenameFix];
}
export type EntitySkeletonSplitFix = EntitySkeletonSplitFixMembers & SimpleEntityRenameFix;
export interface EntitySkeletonSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntitySkeletonSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntitySpawnerItemVariantComponentFix. */
export interface EntitySpawnerItemVariantComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntitySpawnerItemVariantComponentFix = EntitySpawnerItemVariantComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntitySpawnerItemVariantComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntitySpawnerItemVariantComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityStringUuidFix. */
export interface EntityStringUuidFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type EntityStringUuidFix = EntityStringUuidFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EntityStringUuidFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityStringUuidFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityTheRenameningFix. */
export interface EntityTheRenameningFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityTheRenameningFix = EntityTheRenameningFixMembers & SimplestEntityRenameFix;
export interface EntityTheRenameningFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityTheRenameningFix;
  readonly RENAMED_BLOCKS: JavaMap<string, string>;
  readonly RENAMED_IDS: JavaMap<string, string>;
  readonly RENAMED_ITEMS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityTippedArrowFix. */
export interface EntityTippedArrowFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityTippedArrowFix = EntityTippedArrowFixMembers & SimplestEntityRenameFix;
export interface EntityTippedArrowFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityTippedArrowFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityUUIDFix. */
export interface EntityUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
}
export type EntityUUIDFix = EntityUUIDFixMembers & AbstractUUIDFix;
export interface EntityUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityUUIDFix;
  updateEntityUUID(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
  updateLivingEntity(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityVariantFix. */
export interface EntityVariantFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type EntityVariantFix = EntityVariantFixMembers & NamedEntityFix;
export interface EntityVariantFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg3: string, arg4: string, arg5: JavaOpaque<"java.util.function.IntFunction", [string]>): EntityVariantFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityWolfColorFix. */
export interface EntityWolfColorFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityWolfColorFix = EntityWolfColorFixMembers & NamedEntityFix;
export interface EntityWolfColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityWolfColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityZombieSplitFix. */
export interface EntityZombieSplitFixMembers {
  readonly __javaSupertypes?: readonly [EntityRenameFix];
}
export type EntityZombieSplitFix = EntityZombieSplitFixMembers & EntityRenameFix;
export interface EntityZombieSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityZombieSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityZombieVillagerTypeFix. */
export interface EntityZombieVillagerTypeFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type EntityZombieVillagerTypeFix = EntityZombieVillagerTypeFixMembers & NamedEntityFix;
export interface EntityZombieVillagerTypeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): EntityZombieVillagerTypeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EntityZombifiedPiglinRenameFix. */
export interface EntityZombifiedPiglinRenameFixMembers {
  readonly __javaSupertypes?: readonly [SimplestEntityRenameFix];
}
export type EntityZombifiedPiglinRenameFix = EntityZombifiedPiglinRenameFixMembers & SimplestEntityRenameFix;
export interface EntityZombifiedPiglinRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EntityZombifiedPiglinRenameFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.EquipmentFormatFix. */
export interface EquipmentFormatFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type EquipmentFormatFix = EquipmentFormatFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EquipmentFormatFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EquipmentFormatFix;
}

/** JVM class net.minecraft.util.datafix.fixes.EquippableAssetRenameFix. */
export interface EquippableAssetRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type EquippableAssetRenameFix = EquippableAssetRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface EquippableAssetRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): EquippableAssetRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.FeatureFlagRemoveFix. */
export interface FeatureFlagRemoveFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type FeatureFlagRemoveFix = FeatureFlagRemoveFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface FeatureFlagRemoveFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaSet<string>): FeatureFlagRemoveFix;
}

/** JVM class net.minecraft.util.datafix.fixes.FilteredBooksFix. */
export interface FilteredBooksFixMembers {
  readonly __javaSupertypes?: readonly [ItemStackTagFix];
}
export type FilteredBooksFix = FilteredBooksFixMembers & ItemStackTagFix;
export interface FilteredBooksFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FilteredBooksFix;
}

/** JVM class net.minecraft.util.datafix.fixes.FilteredSignsFix. */
export interface FilteredSignsFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type FilteredSignsFix = FilteredSignsFixMembers & NamedEntityWriteReadFix;
export interface FilteredSignsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FilteredSignsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.FireResistantToDamageResistantComponentFix. */
export interface FireResistantToDamageResistantComponentFixMembers {
  readonly __javaSupertypes?: readonly [DataComponentRemainderFix];
}
export type FireResistantToDamageResistantComponentFix = FireResistantToDamageResistantComponentFixMembers & DataComponentRemainderFix;
export interface FireResistantToDamageResistantComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FireResistantToDamageResistantComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.FixProjectileStoredItem. */
export interface FixProjectileStoredItemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type FixProjectileStoredItem = FixProjectileStoredItemMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface FixProjectileStoredItemStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FixProjectileStoredItem;
}

/** JVM class net.minecraft.util.datafix.fixes.FixWolfHealth. */
export interface FixWolfHealthMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type FixWolfHealth = FixWolfHealthMembers & NamedEntityFix;
export interface FixWolfHealthStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FixWolfHealth;
}

/** JVM class net.minecraft.util.datafix.fixes.FoodToConsumableFix. */
export interface FoodToConsumableFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type FoodToConsumableFix = FoodToConsumableFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface FoodToConsumableFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): FoodToConsumableFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ForcedChunkToTicketFix. */
export interface ForcedChunkToTicketFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ForcedChunkToTicketFix = ForcedChunkToTicketFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ForcedChunkToTicketFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ForcedChunkToTicketFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ForcePoiRebuild. */
export interface ForcePoiRebuildMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ForcePoiRebuild = ForcePoiRebuildMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ForcePoiRebuildStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ForcePoiRebuild;
}

/** JVM class net.minecraft.util.datafix.fixes.FurnaceRecipeFix. */
export interface FurnaceRecipeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type FurnaceRecipeFix = FurnaceRecipeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface FurnaceRecipeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): FurnaceRecipeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.GoatHornIdFix. */
export interface GoatHornIdFixMembers {
  readonly __javaSupertypes?: readonly [ItemStackTagRemainderFix];
}
export type GoatHornIdFix = GoatHornIdFixMembers & ItemStackTagRemainderFix;
export interface GoatHornIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): GoatHornIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.GossipUUIDFix. */
export interface GossipUUIDFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type GossipUUIDFix = GossipUUIDFixMembers & NamedEntityFix;
export interface GossipUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string): GossipUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.HeightmapRenamingFix. */
export interface HeightmapRenamingFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type HeightmapRenamingFix = HeightmapRenamingFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface HeightmapRenamingFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): HeightmapRenamingFix;
}

/** JVM class net.minecraft.util.datafix.fixes.HorseBodyArmorItemFix. */
export interface HorseBodyArmorItemFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type HorseBodyArmorItemFix = HorseBodyArmorItemFixMembers & NamedEntityWriteReadFix;
export interface HorseBodyArmorItemFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: string, arg3: boolean): HorseBodyArmorItemFix;
}

/** JVM class net.minecraft.util.datafix.fixes.IglooMetadataRemovalFix. */
export interface IglooMetadataRemovalFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type IglooMetadataRemovalFix = IglooMetadataRemovalFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface IglooMetadataRemovalFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): IglooMetadataRemovalFix;
}

/** JVM class net.minecraft.util.datafix.fixes.InlineBlockPosFormatFix. */
export interface InlineBlockPosFormatFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type InlineBlockPosFormatFix = InlineBlockPosFormatFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface InlineBlockPosFormatFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): InlineBlockPosFormatFix;
}

/** JVM class net.minecraft.util.datafix.fixes.InvalidBlockEntityLockFix. */
export interface InvalidBlockEntityLockFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type InvalidBlockEntityLockFix = InvalidBlockEntityLockFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface InvalidBlockEntityLockFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): InvalidBlockEntityLockFix;
}

/** JVM class net.minecraft.util.datafix.fixes.InvalidLockComponentFix. */
export interface InvalidLockComponentFixMembers {
  readonly __javaSupertypes?: readonly [DataComponentRemainderFix];
}
export type InvalidLockComponentFix = InvalidLockComponentFixMembers & DataComponentRemainderFix;
export interface InvalidLockComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): InvalidLockComponentFix;
  fixLock<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]> | null;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemBannerColorFix. */
export interface ItemBannerColorFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemBannerColorFix = ItemBannerColorFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemBannerColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemBannerColorFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemCustomNameToComponentFix. */
export interface ItemCustomNameToComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemCustomNameToComponentFix = ItemCustomNameToComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemCustomNameToComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ItemCustomNameToComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemIdFix. */
export interface ItemIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemIdFix = ItemIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemIdFix;
  readonly ITEM_NAMES: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [string]>;
  getItem(arg0: number): string;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemLoreFix. */
export interface ItemLoreFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ItemLoreFix = ItemLoreFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemLoreFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ItemLoreFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemPotionFix. */
export interface ItemPotionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemPotionFix = ItemPotionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemPotionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemPotionFix;
  readonly DEFAULT: "minecraft:water";
}

/** JVM abstract net.minecraft.util.datafix.fixes.ItemRenameFix. */
export interface ItemRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemRenameFix = ItemRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemRenameFixStatics {
  create(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaFunction<string, string>): JavaOpaque<"com.mojang.datafixers.DataFix">;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemShulkerBoxColorFix. */
export interface ItemShulkerBoxColorFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemShulkerBoxColorFix = ItemShulkerBoxColorFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemShulkerBoxColorFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemShulkerBoxColorFix;
  readonly NAMES_BY_COLOR: Array<string>;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemSpawnEggFix. */
export interface ItemSpawnEggFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemSpawnEggFix = ItemSpawnEggFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemSpawnEggFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemSpawnEggFix;
  readonly ID_TO_ENTITY: Array<string>;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackComponentizationFix. */
export interface ItemStackComponentizationFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ItemStackComponentizationFix = ItemStackComponentizationFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackComponentizationFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ItemStackComponentizationFix;
  fixProfile(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackCustomNameToOverrideComponentFix. */
export interface ItemStackCustomNameToOverrideComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackCustomNameToOverrideComponentFix = ItemStackCustomNameToOverrideComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackCustomNameToOverrideComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ItemStackCustomNameToOverrideComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackEnchantmentNamesFix. */
export interface ItemStackEnchantmentNamesFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ItemStackEnchantmentNamesFix = ItemStackEnchantmentNamesFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackEnchantmentNamesFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemStackEnchantmentNamesFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackMapIdFix. */
export interface ItemStackMapIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackMapIdFix = ItemStackMapIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackMapIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemStackMapIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackSpawnEggFix. */
export interface ItemStackSpawnEggFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackSpawnEggFix = ItemStackSpawnEggFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackSpawnEggFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean, arg2: string): ItemStackSpawnEggFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.ItemStackTagFix. */
export interface ItemStackTagFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackTagFix = ItemStackTagFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackTagFixStatics {
  createFixer(arg0: JavaOpaque<"com.mojang.datafixers.types.Type", [object]>, arg1: JavaPredicate<string>, arg2: JavaOpaque<"java.util.function.UnaryOperator", [JavaOpaque<"com.mojang.datafixers.Typed", [object]>]>): JavaOpaque<"java.util.function.UnaryOperator", [JavaOpaque<"com.mojang.datafixers.Typed", [object]>]>;
}

/** JVM abstract net.minecraft.util.datafix.fixes.ItemStackTagRemainderFix. */
export interface ItemStackTagRemainderFixMembers {
  readonly __javaSupertypes?: readonly [ItemStackTagFix];
}
export type ItemStackTagRemainderFix = ItemStackTagRemainderFixMembers & ItemStackTagFix;
export interface ItemStackTagRemainderFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackTheFlatteningFix. */
export interface ItemStackTheFlatteningFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackTheFlatteningFix = ItemStackTheFlatteningFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemStackTheFlatteningFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemStackTheFlatteningFix;
  updateItem(arg0: string | null, arg1: number): string | null;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemStackUUIDFix. */
export interface ItemStackUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemStackUUIDFix = ItemStackUUIDFixMembers & AbstractUUIDFix;
export interface ItemStackUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ItemStackUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ItemWaterPotionFix. */
export interface ItemWaterPotionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type ItemWaterPotionFix = ItemWaterPotionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ItemWaterPotionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ItemWaterPotionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.JigsawPropertiesFix. */
export interface JigsawPropertiesFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type JigsawPropertiesFix = JigsawPropertiesFixMembers & NamedEntityFix;
export interface JigsawPropertiesFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): JigsawPropertiesFix;
}

/** JVM class net.minecraft.util.datafix.fixes.JigsawRotationFix. */
export interface JigsawRotationFixMembers {
  readonly __javaSupertypes?: readonly [AbstractBlockPropertyFix];
}
export type JigsawRotationFix = JigsawRotationFixMembers & AbstractBlockPropertyFix;
export interface JigsawRotationFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JigsawRotationFix;
}

/** JVM class net.minecraft.util.datafix.fixes.JukeboxTicksSinceSongStartedFix. */
export interface JukeboxTicksSinceSongStartedFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type JukeboxTicksSinceSongStartedFix = JukeboxTicksSinceSongStartedFixMembers & NamedEntityFix;
export interface JukeboxTicksSinceSongStartedFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JukeboxTicksSinceSongStartedFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LeavesFix. */
export interface LeavesFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type LeavesFix = LeavesFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LeavesFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): LeavesFix;
  getIndex(arg0: number, arg1: number, arg2: number): number;
  getSideMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): number;
}

/** JVM class net.minecraft.util.datafix.fixes.LeavesFix$LeavesSection. */
export interface LeavesFix_LeavesSectionMembers {
  readonly __javaSupertypes?: readonly [LeavesFix_Section];
  isLeaf(arg0: number): boolean;
  isLog(arg0: number): boolean;
}
export type LeavesFix_LeavesSection = LeavesFix_LeavesSectionMembers & LeavesFix_Section;
export interface LeavesFix_LeavesSectionStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.Typed", [object]>, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LeavesFix_LeavesSection;
}

/** JVM abstract net.minecraft.util.datafix.fixes.LeavesFix$Section. */
export interface LeavesFix_SectionMembers {
  getBlock(arg0: number): number;
  isSkippable(): boolean;
  write(arg0: JavaOpaque<"com.mojang.datafixers.Typed", [object]>): JavaOpaque<"com.mojang.datafixers.Typed", [object]>;
}
export type LeavesFix_Section = LeavesFix_SectionMembers;
export interface LeavesFix_SectionStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.LegacyDimensionIdFix. */
export interface LegacyDimensionIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type LegacyDimensionIdFix = LegacyDimensionIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LegacyDimensionIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LegacyDimensionIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LegacyDragonFightFix. */
export interface LegacyDragonFightFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type LegacyDragonFightFix = LegacyDragonFightFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LegacyDragonFightFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LegacyDragonFightFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LegacyHoverEventFix. */
export interface LegacyHoverEventFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type LegacyHoverEventFix = LegacyHoverEventFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LegacyHoverEventFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LegacyHoverEventFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LevelDataGeneratorOptionsFix. */
export interface LevelDataGeneratorOptionsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type LevelDataGeneratorOptionsFix = LevelDataGeneratorOptionsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LevelDataGeneratorOptionsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): LevelDataGeneratorOptionsFix;
  readonly GENERATOR_OPTIONS: "generatorOptions";
}

/** JVM class net.minecraft.util.datafix.fixes.LevelFlatGeneratorInfoFix. */
export interface LevelFlatGeneratorInfoFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type LevelFlatGeneratorInfoFix = LevelFlatGeneratorInfoFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LevelFlatGeneratorInfoFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): LevelFlatGeneratorInfoFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LevelLegacyWorldGenSettingsFix. */
export interface LevelLegacyWorldGenSettingsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type LevelLegacyWorldGenSettingsFix = LevelLegacyWorldGenSettingsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface LevelLegacyWorldGenSettingsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LevelLegacyWorldGenSettingsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LevelUUIDFix. */
export interface LevelUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
}
export type LevelUUIDFix = LevelUUIDFixMembers & AbstractUUIDFix;
export interface LevelUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LevelUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.LockComponentPredicateFix. */
export interface LockComponentPredicateFixMembers {
  readonly __javaSupertypes?: readonly [DataComponentRemainderFix];
}
export type LockComponentPredicateFix = LockComponentPredicateFixMembers & DataComponentRemainderFix;
export interface LockComponentPredicateFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LockComponentPredicateFix;
  readonly ESCAPER: JavaOpaque<"com.google.common.escape.Escaper">;
  fixLock<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>): JavaOpaque<"com.mojang.serialization.Dynamic", [T]> | null;
}

/** JVM class net.minecraft.util.datafix.fixes.LodestoneCompassComponentFix. */
export interface LodestoneCompassComponentFixMembers {
  readonly __javaSupertypes?: readonly [DataComponentRemainderFix];
}
export type LodestoneCompassComponentFix = LodestoneCompassComponentFixMembers & DataComponentRemainderFix;
export interface LodestoneCompassComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): LodestoneCompassComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MapBannerBlockPosFormatFix. */
export interface MapBannerBlockPosFormatFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type MapBannerBlockPosFormatFix = MapBannerBlockPosFormatFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface MapBannerBlockPosFormatFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): MapBannerBlockPosFormatFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MapIdFix. */
export interface MapIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type MapIdFix = MapIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface MapIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): MapIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MemoryExpiryDataFix. */
export interface MemoryExpiryDataFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type MemoryExpiryDataFix = MemoryExpiryDataFixMembers & NamedEntityFix;
export interface MemoryExpiryDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string): MemoryExpiryDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MissingDimensionFix. */
export interface MissingDimensionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type MissingDimensionFix = MissingDimensionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface MissingDimensionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): MissingDimensionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MobEffectIdFix. */
export interface MobEffectIdFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type MobEffectIdFix = MobEffectIdFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface MobEffectIdFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): MobEffectIdFix;
}

/** JVM class net.minecraft.util.datafix.fixes.MobSpawnerEntityIdentifiersFix. */
export interface MobSpawnerEntityIdentifiersFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type MobSpawnerEntityIdentifiersFix = MobSpawnerEntityIdentifiersFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface MobSpawnerEntityIdentifiersFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): MobSpawnerEntityIdentifiersFix;
}

/** JVM class net.minecraft.util.datafix.fixes.NamedEntityConvertUncheckedFix. */
export interface NamedEntityConvertUncheckedFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type NamedEntityConvertUncheckedFix = NamedEntityConvertUncheckedFixMembers & NamedEntityFix;
export interface NamedEntityConvertUncheckedFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg3: string): NamedEntityConvertUncheckedFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.NamedEntityFix. */
export interface NamedEntityFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type NamedEntityFix = NamedEntityFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface NamedEntityFixStatics {
}

/** JVM abstract net.minecraft.util.datafix.fixes.NamedEntityWriteReadFix. */
export interface NamedEntityWriteReadFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type NamedEntityWriteReadFix = NamedEntityWriteReadFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface NamedEntityWriteReadFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.NamespacedTypeRenameFix. */
export interface NamespacedTypeRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type NamespacedTypeRenameFix = NamespacedTypeRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface NamespacedTypeRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg3: JavaOpaque<"java.util.function.UnaryOperator", [string]>): NamespacedTypeRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.NewVillageFix. */
export interface NewVillageFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type NewVillageFix = NewVillageFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface NewVillageFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): NewVillageFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ObjectiveRenderTypeFix. */
export interface ObjectiveRenderTypeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ObjectiveRenderTypeFix = ObjectiveRenderTypeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ObjectiveRenderTypeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ObjectiveRenderTypeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OminousBannerBlockEntityRenameFix. */
export interface OminousBannerBlockEntityRenameFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type OminousBannerBlockEntityRenameFix = OminousBannerBlockEntityRenameFixMembers & NamedEntityFix;
export interface OminousBannerBlockEntityRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OminousBannerBlockEntityRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OminousBannerRarityFix. */
export interface OminousBannerRarityFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OminousBannerRarityFix = OminousBannerRarityFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OminousBannerRarityFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OminousBannerRarityFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OminousBannerRenameFix. */
export interface OminousBannerRenameFixMembers {
  readonly __javaSupertypes?: readonly [ItemStackTagFix];
}
export type OminousBannerRenameFix = OminousBannerRenameFixMembers & ItemStackTagFix;
export interface OminousBannerRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OminousBannerRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsAccessibilityOnboardFix. */
export interface OptionsAccessibilityOnboardFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type OptionsAccessibilityOnboardFix = OptionsAccessibilityOnboardFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsAccessibilityOnboardFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OptionsAccessibilityOnboardFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsAddTextBackgroundFix. */
export interface OptionsAddTextBackgroundFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsAddTextBackgroundFix = OptionsAddTextBackgroundFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsAddTextBackgroundFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OptionsAddTextBackgroundFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsAmbientOcclusionFix. */
export interface OptionsAmbientOcclusionFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsAmbientOcclusionFix = OptionsAmbientOcclusionFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsAmbientOcclusionFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OptionsAmbientOcclusionFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsForceVBOFix. */
export interface OptionsForceVBOFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsForceVBOFix = OptionsForceVBOFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsForceVBOFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OptionsForceVBOFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsKeyLwjgl3Fix. */
export interface OptionsKeyLwjgl3FixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsKeyLwjgl3Fix = OptionsKeyLwjgl3FixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsKeyLwjgl3FixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OptionsKeyLwjgl3Fix;
  readonly KEY_UNKNOWN: "key.unknown";
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsKeyTranslationFix. */
export interface OptionsKeyTranslationFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsKeyTranslationFix = OptionsKeyTranslationFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsKeyTranslationFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OptionsKeyTranslationFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsLowerCaseLanguageFix. */
export interface OptionsLowerCaseLanguageFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsLowerCaseLanguageFix = OptionsLowerCaseLanguageFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsLowerCaseLanguageFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): OptionsLowerCaseLanguageFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsMenuBlurrinessFix. */
export interface OptionsMenuBlurrinessFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsMenuBlurrinessFix = OptionsMenuBlurrinessFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsMenuBlurrinessFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OptionsMenuBlurrinessFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsProgrammerArtFix. */
export interface OptionsProgrammerArtFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsProgrammerArtFix = OptionsProgrammerArtFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsProgrammerArtFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OptionsProgrammerArtFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OptionsRenameFieldFix. */
export interface OptionsRenameFieldFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type OptionsRenameFieldFix = OptionsRenameFieldFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OptionsRenameFieldFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean, arg2: string, arg3: string, arg4: string): OptionsRenameFieldFix;
}

/** JVM class net.minecraft.util.datafix.fixes.OverreachingTickFix. */
export interface OverreachingTickFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type OverreachingTickFix = OverreachingTickFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface OverreachingTickFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): OverreachingTickFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ParticleUnflatteningFix. */
export interface ParticleUnflatteningFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ParticleUnflatteningFix = ParticleUnflatteningFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ParticleUnflatteningFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ParticleUnflatteningFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PlayerEquipmentFix. */
export interface PlayerEquipmentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type PlayerEquipmentFix = PlayerEquipmentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface PlayerEquipmentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): PlayerEquipmentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PlayerHeadBlockProfileFix. */
export interface PlayerHeadBlockProfileFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type PlayerHeadBlockProfileFix = PlayerHeadBlockProfileFixMembers & NamedEntityFix;
export interface PlayerHeadBlockProfileFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): PlayerHeadBlockProfileFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PlayerUUIDFix. */
export interface PlayerUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
}
export type PlayerUUIDFix = PlayerUUIDFixMembers & AbstractUUIDFix;
export interface PlayerUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): PlayerUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PoiTypeRemoveFix. */
export interface PoiTypeRemoveFixMembers {
  readonly __javaSupertypes?: readonly [AbstractPoiSectionFix];
}
export type PoiTypeRemoveFix = PoiTypeRemoveFixMembers & AbstractPoiSectionFix;
export interface PoiTypeRemoveFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaPredicate<string>): PoiTypeRemoveFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PoiTypeRenameFix. */
export interface PoiTypeRenameFixMembers {
  readonly __javaSupertypes?: readonly [AbstractPoiSectionFix];
}
export type PoiTypeRenameFix = PoiTypeRenameFixMembers & AbstractPoiSectionFix;
export interface PoiTypeRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaFunction<string, string>): PoiTypeRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.PrimedTntBlockStateFixer. */
export interface PrimedTntBlockStateFixerMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type PrimedTntBlockStateFixer = PrimedTntBlockStateFixerMembers & NamedEntityWriteReadFix;
export interface PrimedTntBlockStateFixerStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): PrimedTntBlockStateFixer;
}

/** JVM class net.minecraft.util.datafix.fixes.ProjectileStoredWeaponFix. */
export interface ProjectileStoredWeaponFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ProjectileStoredWeaponFix = ProjectileStoredWeaponFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ProjectileStoredWeaponFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ProjectileStoredWeaponFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RaidRenamesDataFix. */
export interface RaidRenamesDataFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type RaidRenamesDataFix = RaidRenamesDataFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RaidRenamesDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): RaidRenamesDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RandomSequenceSettingsFix. */
export interface RandomSequenceSettingsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type RandomSequenceSettingsFix = RandomSequenceSettingsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RandomSequenceSettingsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): RandomSequenceSettingsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RecipesFix. */
export interface RecipesFixMembers {
}
export type RecipesFix = RecipesFixMembers;
export interface RecipesFixStatics {
  new(): RecipesFix;
  readonly RECIPES: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.RecipesRenameningFix. */
export interface RecipesRenameningFixMembers {
}
export type RecipesRenameningFix = RecipesRenameningFixMembers;
export interface RecipesRenameningFixStatics {
  new(): RecipesRenameningFix;
  readonly RECIPES: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.RedstoneWireConnectionsFix. */
export interface RedstoneWireConnectionsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type RedstoneWireConnectionsFix = RedstoneWireConnectionsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RedstoneWireConnectionsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): RedstoneWireConnectionsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.References. */
export interface ReferencesMembers {
}
export type References = ReferencesMembers;
export interface ReferencesStatics {
  new(): References;
  readonly ADVANCEMENTS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly BIOME: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly BLOCK_ENTITY: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly BLOCK_NAME: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly BLOCK_STATE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly CHUNK: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly DATA_COMPONENTS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ENTITY: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ENTITY_CHUNK: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ENTITY_EQUIPMENT: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ENTITY_NAME: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ENTITY_TREE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly FLAT_BLOCK_STATE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly GAME_EVENT_NAME: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly HOTBAR: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ITEM_NAME: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly ITEM_STACK: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly LEVEL: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly LIGHTWEIGHT_LEVEL: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly OBJECTIVE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly OPTIONS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly PARTICLE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly PLAYER: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly POI_CHUNK: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly RECIPE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_COMMAND_STORAGE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_MAP_DATA: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_MAP_INDEX: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_RAIDS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_RANDOM_SEQUENCES: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_SCOREBOARD: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_STRUCTURE_FEATURE_INDICES: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly SAVED_DATA_TICKETS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly STATS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly STRUCTURE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly STRUCTURE_FEATURE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly TEAM: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly TEXT_COMPONENT: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly UNTAGGED_SPAWNER: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly VILLAGER_TRADE: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  readonly WORLD_GEN_SETTINGS: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
  reference(arg0: string): JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">;
}

/** JVM class net.minecraft.util.datafix.fixes.RemapChunkStatusFix. */
export interface RemapChunkStatusFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type RemapChunkStatusFix = RemapChunkStatusFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RemapChunkStatusFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"java.util.function.UnaryOperator", [string]>): RemapChunkStatusFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RemoveBlockEntityTagFix. */
export interface RemoveBlockEntityTagFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type RemoveBlockEntityTagFix = RemoveBlockEntityTagFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RemoveBlockEntityTagFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaSet<string>): RemoveBlockEntityTagFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RemoveEmptyItemInBrushableBlockFix. */
export interface RemoveEmptyItemInBrushableBlockFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type RemoveEmptyItemInBrushableBlockFix = RemoveEmptyItemInBrushableBlockFixMembers & NamedEntityWriteReadFix;
export interface RemoveEmptyItemInBrushableBlockFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): RemoveEmptyItemInBrushableBlockFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RemoveGolemGossipFix. */
export interface RemoveGolemGossipFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type RemoveGolemGossipFix = RemoveGolemGossipFixMembers & NamedEntityFix;
export interface RemoveGolemGossipFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): RemoveGolemGossipFix;
}

/** JVM class net.minecraft.util.datafix.fixes.RenamedCoralFansFix. */
export interface RenamedCoralFansFixMembers {
}
export type RenamedCoralFansFix = RenamedCoralFansFixMembers;
export interface RenamedCoralFansFixStatics {
  new(): RenamedCoralFansFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.RenamedCoralFix. */
export interface RenamedCoralFixMembers {
}
export type RenamedCoralFix = RenamedCoralFixMembers;
export interface RenamedCoralFixStatics {
  new(): RenamedCoralFix;
  readonly RENAMED_IDS: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.fixes.RenameEnchantmentsFix. */
export interface RenameEnchantmentsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type RenameEnchantmentsFix = RenameEnchantmentsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface RenameEnchantmentsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaMap<string, string>): RenameEnchantmentsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ReorganizePoi. */
export interface ReorganizePoiMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ReorganizePoi = ReorganizePoiMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ReorganizePoiStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ReorganizePoi;
}

/** JVM class net.minecraft.util.datafix.fixes.SaddleEquipmentSlotFix. */
export interface SaddleEquipmentSlotFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type SaddleEquipmentSlotFix = SaddleEquipmentSlotFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface SaddleEquipmentSlotFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): SaddleEquipmentSlotFix;
}

/** JVM class net.minecraft.util.datafix.fixes.SavedDataFeaturePoolElementFix. */
export interface SavedDataFeaturePoolElementFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type SavedDataFeaturePoolElementFix = SavedDataFeaturePoolElementFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface SavedDataFeaturePoolElementFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): SavedDataFeaturePoolElementFix;
}

/** JVM class net.minecraft.util.datafix.fixes.SavedDataUUIDFix. */
export interface SavedDataUUIDFixMembers {
  readonly __javaSupertypes?: readonly [AbstractUUIDFix];
}
export type SavedDataUUIDFix = SavedDataUUIDFixMembers & AbstractUUIDFix;
export interface SavedDataUUIDFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): SavedDataUUIDFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ScoreboardDisplayNameFix. */
export interface ScoreboardDisplayNameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ScoreboardDisplayNameFix = ScoreboardDisplayNameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ScoreboardDisplayNameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">): ScoreboardDisplayNameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ScoreboardDisplaySlotFix. */
export interface ScoreboardDisplaySlotFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type ScoreboardDisplaySlotFix = ScoreboardDisplaySlotFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface ScoreboardDisplaySlotFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ScoreboardDisplaySlotFix;
}

/** JVM class net.minecraft.util.datafix.fixes.SignTextStrictJsonFix. */
export interface SignTextStrictJsonFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type SignTextStrictJsonFix = SignTextStrictJsonFixMembers & NamedEntityFix;
export interface SignTextStrictJsonFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): SignTextStrictJsonFix;
}

/** JVM abstract net.minecraft.util.datafix.fixes.SimpleEntityRenameFix. */
export interface SimpleEntityRenameFixMembers {
  readonly __javaSupertypes?: readonly [EntityRenameFix];
}
export type SimpleEntityRenameFix = SimpleEntityRenameFixMembers & EntityRenameFix;
export interface SimpleEntityRenameFixStatics {
}

/** JVM abstract net.minecraft.util.datafix.fixes.SimplestEntityRenameFix. */
export interface SimplestEntityRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type SimplestEntityRenameFix = SimplestEntityRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface SimplestEntityRenameFixStatics {
}

/** JVM class net.minecraft.util.datafix.fixes.SpawnerDataFix. */
export interface SpawnerDataFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type SpawnerDataFix = SpawnerDataFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface SpawnerDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): SpawnerDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StatsCounterFix. */
export interface StatsCounterFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type StatsCounterFix = StatsCounterFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface StatsCounterFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): StatsCounterFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StatsRenameFix. */
export interface StatsRenameFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type StatsRenameFix = StatsRenameFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface StatsRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaMap<string, string>): StatsRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StriderGravityFix. */
export interface StriderGravityFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type StriderGravityFix = StriderGravityFixMembers & NamedEntityFix;
export interface StriderGravityFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): StriderGravityFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StructureReferenceCountFix. */
export interface StructureReferenceCountFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type StructureReferenceCountFix = StructureReferenceCountFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface StructureReferenceCountFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): StructureReferenceCountFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix. */
export interface StructuresBecomeConfiguredFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type StructuresBecomeConfiguredFix = StructuresBecomeConfiguredFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface StructuresBecomeConfiguredFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): StructuresBecomeConfiguredFix;
}

/** JVM class net.minecraft.util.datafix.fixes.StructureSettingsFlattenFix. */
export interface StructureSettingsFlattenFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type StructureSettingsFlattenFix = StructureSettingsFlattenFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface StructureSettingsFlattenFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): StructureSettingsFlattenFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TextComponentHoverAndClickEventFix. */
export interface TextComponentHoverAndClickEventFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type TextComponentHoverAndClickEventFix = TextComponentHoverAndClickEventFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface TextComponentHoverAndClickEventFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TextComponentHoverAndClickEventFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TextComponentStringifiedFlagsFix. */
export interface TextComponentStringifiedFlagsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type TextComponentStringifiedFlagsFix = TextComponentStringifiedFlagsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface TextComponentStringifiedFlagsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TextComponentStringifiedFlagsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ThrownPotionSplitFix. */
export interface ThrownPotionSplitFixMembers {
  readonly __javaSupertypes?: readonly [EntityRenameFix];
}
export type ThrownPotionSplitFix = ThrownPotionSplitFixMembers & EntityRenameFix;
export interface ThrownPotionSplitFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): ThrownPotionSplitFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TippedArrowPotionToItemFix. */
export interface TippedArrowPotionToItemFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type TippedArrowPotionToItemFix = TippedArrowPotionToItemFixMembers & NamedEntityWriteReadFix;
export interface TippedArrowPotionToItemFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TippedArrowPotionToItemFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TooltipDisplayComponentFix. */
export interface TooltipDisplayComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type TooltipDisplayComponentFix = TooltipDisplayComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface TooltipDisplayComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TooltipDisplayComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TrappedChestBlockEntityFix. */
export interface TrappedChestBlockEntityFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type TrappedChestBlockEntityFix = TrappedChestBlockEntityFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface TrappedChestBlockEntityFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): TrappedChestBlockEntityFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TrappedChestBlockEntityFix$TrappedChestSection. */
export interface TrappedChestBlockEntityFix_TrappedChestSectionMembers {
  readonly __javaSupertypes?: readonly [LeavesFix_Section];
  isTrappedChest(arg0: number): boolean;
}
export type TrappedChestBlockEntityFix_TrappedChestSection = TrappedChestBlockEntityFix_TrappedChestSectionMembers & LeavesFix_Section;
export interface TrappedChestBlockEntityFix_TrappedChestSectionStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.Typed", [object]>, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TrappedChestBlockEntityFix_TrappedChestSection;
}

/** JVM class net.minecraft.util.datafix.fixes.TrialSpawnerConfigFix. */
export interface TrialSpawnerConfigFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityWriteReadFix];
}
export type TrialSpawnerConfigFix = TrialSpawnerConfigFixMembers & NamedEntityWriteReadFix;
export interface TrialSpawnerConfigFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TrialSpawnerConfigFix;
}

/** JVM class net.minecraft.util.datafix.fixes.TrialSpawnerConfigInRegistryFix. */
export interface TrialSpawnerConfigInRegistryFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
  fixTag(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [j_net_minecraft_nbt.Tag]>): JavaOpaque<"com.mojang.serialization.Dynamic", [object]>;
}
export type TrialSpawnerConfigInRegistryFix = TrialSpawnerConfigInRegistryFixMembers & NamedEntityFix;
export interface TrialSpawnerConfigInRegistryFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): TrialSpawnerConfigInRegistryFix;
}

/** JVM class net.minecraft.util.datafix.fixes.UnflattenTextComponentFix. */
export interface UnflattenTextComponentFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type UnflattenTextComponentFix = UnflattenTextComponentFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface UnflattenTextComponentFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): UnflattenTextComponentFix;
}

/** JVM class net.minecraft.util.datafix.fixes.VariantRenameFix. */
export interface VariantRenameFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type VariantRenameFix = VariantRenameFixMembers & NamedEntityFix;
export interface VariantRenameFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg3: string, arg4: JavaMap<string, string>): VariantRenameFix;
}

/** JVM class net.minecraft.util.datafix.fixes.VillagerDataFix. */
export interface VillagerDataFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type VillagerDataFix = VillagerDataFixMembers & NamedEntityFix;
export interface VillagerDataFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string): VillagerDataFix;
}

/** JVM class net.minecraft.util.datafix.fixes.VillagerFollowRangeFix. */
export interface VillagerFollowRangeFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type VillagerFollowRangeFix = VillagerFollowRangeFixMembers & NamedEntityFix;
export interface VillagerFollowRangeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): VillagerFollowRangeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.VillagerRebuildLevelAndXpFix. */
export interface VillagerRebuildLevelAndXpFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type VillagerRebuildLevelAndXpFix = VillagerRebuildLevelAndXpFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface VillagerRebuildLevelAndXpFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): VillagerRebuildLevelAndXpFix;
  getMinXpPerLevel(arg0: number): number;
}

/** JVM class net.minecraft.util.datafix.fixes.VillagerSetCanPickUpLootFix. */
export interface VillagerSetCanPickUpLootFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type VillagerSetCanPickUpLootFix = VillagerSetCanPickUpLootFixMembers & NamedEntityFix;
export interface VillagerSetCanPickUpLootFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): VillagerSetCanPickUpLootFix;
}

/** JVM class net.minecraft.util.datafix.fixes.VillagerTradeFix. */
export interface VillagerTradeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type VillagerTradeFix = VillagerTradeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface VillagerTradeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): VillagerTradeFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WallPropertyFix. */
export interface WallPropertyFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
  makeRule(): JavaOpaque<"com.mojang.datafixers.TypeRewriteRule">;
}
export type WallPropertyFix = WallPropertyFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface WallPropertyFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): WallPropertyFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WeaponSmithChestLootTableFix. */
export interface WeaponSmithChestLootTableFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type WeaponSmithChestLootTableFix = WeaponSmithChestLootTableFixMembers & NamedEntityFix;
export interface WeaponSmithChestLootTableFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): WeaponSmithChestLootTableFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WorldGenSettingsDisallowOldCustomWorldsFix. */
export interface WorldGenSettingsDisallowOldCustomWorldsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type WorldGenSettingsDisallowOldCustomWorldsFix = WorldGenSettingsDisallowOldCustomWorldsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface WorldGenSettingsDisallowOldCustomWorldsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): WorldGenSettingsDisallowOldCustomWorldsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WorldGenSettingsFix. */
export interface WorldGenSettingsFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type WorldGenSettingsFix = WorldGenSettingsFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface WorldGenSettingsFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): WorldGenSettingsFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WorldGenSettingsHeightAndBiomeFix. */
export interface WorldGenSettingsHeightAndBiomeFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type WorldGenSettingsHeightAndBiomeFix = WorldGenSettingsHeightAndBiomeFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface WorldGenSettingsHeightAndBiomeFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): WorldGenSettingsHeightAndBiomeFix;
  readonly WAS_PREVIOUSLY_INCREASED_KEY: "has_increased_height_already";
}

/** JVM class net.minecraft.util.datafix.fixes.WriteAndReadFix. */
export interface WriteAndReadFixMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.DataFix">];
}
export type WriteAndReadFix = WriteAndReadFixMembers & JavaOpaque<"com.mojang.datafixers.DataFix">;
export interface WriteAndReadFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: string, arg2: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">): WriteAndReadFix;
}

/** JVM class net.minecraft.util.datafix.fixes.WrittenBookPagesStrictJsonFix. */
export interface WrittenBookPagesStrictJsonFixMembers {
  readonly __javaSupertypes?: readonly [ItemStackTagFix];
}
export type WrittenBookPagesStrictJsonFix = WrittenBookPagesStrictJsonFixMembers & ItemStackTagFix;
export interface WrittenBookPagesStrictJsonFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): WrittenBookPagesStrictJsonFix;
}

/** JVM class net.minecraft.util.datafix.fixes.ZombieVillagerRebuildXpFix. */
export interface ZombieVillagerRebuildXpFixMembers {
  readonly __javaSupertypes?: readonly [NamedEntityFix];
}
export type ZombieVillagerRebuildXpFix = ZombieVillagerRebuildXpFixMembers & NamedEntityFix;
export interface ZombieVillagerRebuildXpFixStatics {
  new(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: boolean): ZombieVillagerRebuildXpFix;
}
