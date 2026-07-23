// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity_trialspawner from './net.minecraft.world.level.block.entity.trialspawner.generated.js';
import type * as j_net_minecraft_world_level_block_entity_vault from './net.minecraft.world.level.block.entity.vault.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** Live JVM enum net.minecraft.world.level.block.state.properties.AttachFace; constants are host handles, not strings. */
export type AttachFace = JavaEnum<"net.minecraft.world.level.block.state.properties.AttachFace", "CEILING" | "FLOOR" | "WALL"> & AttachFaceMembers;
export interface AttachFaceMembers {
  getSerializedName(): string;
}
export interface AttachFaceStatics {
  readonly CEILING: AttachFace;
  readonly FLOOR: AttachFace;
  readonly WALL: AttachFace;
  valueOf(arg0: string): AttachFace;
  values(): Array<AttachFace>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.BambooLeaves; constants are host handles, not strings. */
export type BambooLeaves = JavaEnum<"net.minecraft.world.level.block.state.properties.BambooLeaves", "LARGE" | "NONE" | "SMALL"> & BambooLeavesMembers;
export interface BambooLeavesMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface BambooLeavesStatics {
  readonly LARGE: BambooLeaves;
  readonly NONE: BambooLeaves;
  readonly SMALL: BambooLeaves;
  valueOf(arg0: string): BambooLeaves;
  values(): Array<BambooLeaves>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.BedPart; constants are host handles, not strings. */
export type BedPart = JavaEnum<"net.minecraft.world.level.block.state.properties.BedPart", "FOOT" | "HEAD"> & BedPartMembers;
export interface BedPartMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface BedPartStatics {
  readonly FOOT: BedPart;
  readonly HEAD: BedPart;
  valueOf(arg0: string): BedPart;
  values(): Array<BedPart>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.BellAttachType; constants are host handles, not strings. */
export type BellAttachType = JavaEnum<"net.minecraft.world.level.block.state.properties.BellAttachType", "CEILING" | "DOUBLE_WALL" | "FLOOR" | "SINGLE_WALL"> & BellAttachTypeMembers;
export interface BellAttachTypeMembers {
  getSerializedName(): string;
}
export interface BellAttachTypeStatics {
  readonly CEILING: BellAttachType;
  readonly DOUBLE_WALL: BellAttachType;
  readonly FLOOR: BellAttachType;
  readonly SINGLE_WALL: BellAttachType;
  valueOf(arg0: string): BellAttachType;
  values(): Array<BellAttachType>;
}

/** JVM record net.minecraft.world.level.block.state.properties.BlockSetType. */
export interface BlockSetTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  buttonClickOff(): j_net_minecraft_sounds.SoundEvent;
  buttonClickOn(): j_net_minecraft_sounds.SoundEvent;
  canButtonBeActivatedByArrows(): boolean;
  canOpenByHand(): boolean;
  canOpenByWindCharge(): boolean;
  doorClose(): j_net_minecraft_sounds.SoundEvent;
  doorOpen(): j_net_minecraft_sounds.SoundEvent;
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  pressurePlateClickOff(): j_net_minecraft_sounds.SoundEvent;
  pressurePlateClickOn(): j_net_minecraft_sounds.SoundEvent;
  pressurePlateSensitivity(): BlockSetType_PressurePlateSensitivity;
  soundType(): j_net_minecraft_world_level_block.SoundType;
  toString(): string;
  trapdoorClose(): j_net_minecraft_sounds.SoundEvent;
  trapdoorOpen(): j_net_minecraft_sounds.SoundEvent;
}
export type BlockSetType = BlockSetTypeMembers & JavaOpaque<"java.lang.Record">;
export interface BlockSetTypeStatics {
  new(arg0: string): BlockSetType;
  new(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: BlockSetType_PressurePlateSensitivity, arg5: j_net_minecraft_world_level_block.SoundType, arg6: j_net_minecraft_sounds.SoundEvent, arg7: j_net_minecraft_sounds.SoundEvent, arg8: j_net_minecraft_sounds.SoundEvent, arg9: j_net_minecraft_sounds.SoundEvent, arg10: j_net_minecraft_sounds.SoundEvent, arg11: j_net_minecraft_sounds.SoundEvent, arg12: j_net_minecraft_sounds.SoundEvent, arg13: j_net_minecraft_sounds.SoundEvent): BlockSetType;
  readonly ACACIA: BlockSetType;
  readonly BAMBOO: BlockSetType;
  readonly BIRCH: BlockSetType;
  readonly CHERRY: BlockSetType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [BlockSetType]>;
  readonly COPPER: BlockSetType;
  readonly CRIMSON: BlockSetType;
  readonly DARK_OAK: BlockSetType;
  readonly GOLD: BlockSetType;
  readonly IRON: BlockSetType;
  readonly JUNGLE: BlockSetType;
  readonly MANGROVE: BlockSetType;
  readonly OAK: BlockSetType;
  readonly PALE_OAK: BlockSetType;
  readonly POLISHED_BLACKSTONE: BlockSetType;
  readonly SPRUCE: BlockSetType;
  readonly STONE: BlockSetType;
  readonly WARPED: BlockSetType;
  values(): JavaOpaque<"java.util.stream.Stream", [BlockSetType]>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.BlockSetType$PressurePlateSensitivity; constants are host handles, not strings. */
export type BlockSetType_PressurePlateSensitivity = JavaEnum<"net.minecraft.world.level.block.state.properties.BlockSetType$PressurePlateSensitivity", "EVERYTHING" | "MOBS"> & BlockSetType_PressurePlateSensitivityMembers;
export interface BlockSetType_PressurePlateSensitivityMembers {
}
export interface BlockSetType_PressurePlateSensitivityStatics {
  readonly EVERYTHING: BlockSetType_PressurePlateSensitivity;
  readonly MOBS: BlockSetType_PressurePlateSensitivity;
  valueOf(arg0: string): BlockSetType_PressurePlateSensitivity;
  values(): Array<BlockSetType_PressurePlateSensitivity>;
}

/** JVM class net.minecraft.world.level.block.state.properties.BlockStateProperties. */
export interface BlockStatePropertiesMembers {
}
export type BlockStateProperties = BlockStatePropertiesMembers;
export interface BlockStatePropertiesStatics {
  new(): BlockStateProperties;
  readonly AGE_1: IntegerProperty;
  readonly AGE_15: IntegerProperty;
  readonly AGE_2: IntegerProperty;
  readonly AGE_25: IntegerProperty;
  readonly AGE_3: IntegerProperty;
  readonly AGE_4: IntegerProperty;
  readonly AGE_5: IntegerProperty;
  readonly AGE_7: IntegerProperty;
  readonly ATTACHED: BooleanProperty;
  readonly ATTACH_FACE: EnumProperty<AttachFace>;
  readonly AXIS: EnumProperty<j_net_minecraft_core.Direction_Axis>;
  readonly BAMBOO_LEAVES: EnumProperty<BambooLeaves>;
  readonly BED_PART: EnumProperty<BedPart>;
  readonly BELL_ATTACHMENT: EnumProperty<BellAttachType>;
  readonly BERRIES: BooleanProperty;
  readonly BITES: IntegerProperty;
  readonly BLOOM: BooleanProperty;
  readonly BOTTOM: BooleanProperty;
  readonly CANDLES: IntegerProperty;
  readonly CAN_SUMMON: BooleanProperty;
  readonly CHEST_TYPE: EnumProperty<ChestType>;
  readonly CHISELED_BOOKSHELF_SLOT_0_OCCUPIED: BooleanProperty;
  readonly CHISELED_BOOKSHELF_SLOT_1_OCCUPIED: BooleanProperty;
  readonly CHISELED_BOOKSHELF_SLOT_2_OCCUPIED: BooleanProperty;
  readonly CHISELED_BOOKSHELF_SLOT_3_OCCUPIED: BooleanProperty;
  readonly CHISELED_BOOKSHELF_SLOT_4_OCCUPIED: BooleanProperty;
  readonly CHISELED_BOOKSHELF_SLOT_5_OCCUPIED: BooleanProperty;
  readonly CONDITIONAL: BooleanProperty;
  readonly CRACKED: BooleanProperty;
  readonly CRAFTING: BooleanProperty;
  readonly CREAKING_HEART_STATE: EnumProperty<CreakingHeartState>;
  readonly DELAY: IntegerProperty;
  readonly DISARMED: BooleanProperty;
  readonly DISTANCE: IntegerProperty;
  readonly DOOR_HINGE: EnumProperty<DoorHingeSide>;
  readonly DOUBLE_BLOCK_HALF: EnumProperty<DoubleBlockHalf>;
  readonly DOWN: BooleanProperty;
  readonly DRAG: BooleanProperty;
  readonly DRIED_GHAST_HYDRATION_LEVELS: IntegerProperty;
  readonly DRIPSTONE_THICKNESS: EnumProperty<DripstoneThickness>;
  readonly DUSTED: IntegerProperty;
  readonly EAST: BooleanProperty;
  readonly EAST_REDSTONE: EnumProperty<RedstoneSide>;
  readonly EAST_WALL: EnumProperty<WallSide>;
  readonly EGGS: IntegerProperty;
  readonly ENABLED: BooleanProperty;
  readonly EXTENDED: BooleanProperty;
  readonly EYE: BooleanProperty;
  readonly FACING: EnumProperty<j_net_minecraft_core.Direction>;
  readonly FACING_HOPPER: EnumProperty<j_net_minecraft_core.Direction>;
  readonly FALLING: BooleanProperty;
  readonly FLOWER_AMOUNT: IntegerProperty;
  readonly HALF: EnumProperty<Half>;
  readonly HANGING: BooleanProperty;
  readonly HAS_BOOK: BooleanProperty;
  readonly HAS_BOTTLE_0: BooleanProperty;
  readonly HAS_BOTTLE_1: BooleanProperty;
  readonly HAS_BOTTLE_2: BooleanProperty;
  readonly HAS_RECORD: BooleanProperty;
  readonly HATCH: IntegerProperty;
  readonly HORIZONTAL_AXIS: EnumProperty<j_net_minecraft_core.Direction_Axis>;
  readonly HORIZONTAL_FACING: EnumProperty<j_net_minecraft_core.Direction>;
  readonly INVERTED: BooleanProperty;
  readonly IN_WALL: BooleanProperty;
  readonly LAYERS: IntegerProperty;
  readonly LEVEL: IntegerProperty;
  readonly LEVEL_CAULDRON: IntegerProperty;
  readonly LEVEL_COMPOSTER: IntegerProperty;
  readonly LEVEL_FLOWING: IntegerProperty;
  readonly LEVEL_HONEY: IntegerProperty;
  readonly LIT: BooleanProperty;
  readonly LOCKED: BooleanProperty;
  readonly MAP: BooleanProperty;
  readonly MAX_AGE_1: 1;
  readonly MAX_AGE_15: 15;
  readonly MAX_AGE_2: 2;
  readonly MAX_AGE_25: 25;
  readonly MAX_AGE_3: 3;
  readonly MAX_AGE_4: 4;
  readonly MAX_AGE_5: 5;
  readonly MAX_AGE_7: 7;
  readonly MAX_DISTANCE: 7;
  readonly MAX_LEVEL_15: 15;
  readonly MAX_LEVEL_3: 3;
  readonly MAX_LEVEL_8: 8;
  readonly MAX_RESPAWN_ANCHOR_CHARGES: 4;
  readonly MIN_LEVEL: 0;
  readonly MIN_LEVEL_CAULDRON: 1;
  readonly MIN_RESPAWN_ANCHOR_CHARGES: 0;
  readonly MODE_COMPARATOR: EnumProperty<ComparatorMode>;
  readonly MOISTURE: IntegerProperty;
  readonly NATURAL: BooleanProperty;
  readonly NORTH: BooleanProperty;
  readonly NORTH_REDSTONE: EnumProperty<RedstoneSide>;
  readonly NORTH_WALL: EnumProperty<WallSide>;
  readonly NOTE: IntegerProperty;
  readonly NOTEBLOCK_INSTRUMENT: EnumProperty<NoteBlockInstrument>;
  readonly OCCUPIED: BooleanProperty;
  readonly OMINOUS: BooleanProperty;
  readonly OPEN: BooleanProperty;
  readonly ORIENTATION: EnumProperty<j_net_minecraft_core.FrontAndTop>;
  readonly PERSISTENT: BooleanProperty;
  readonly PICKLES: IntegerProperty;
  readonly PISTON_TYPE: EnumProperty<PistonType>;
  readonly POWER: IntegerProperty;
  readonly POWERED: BooleanProperty;
  readonly RAIL_SHAPE: EnumProperty<RailShape>;
  readonly RAIL_SHAPE_STRAIGHT: EnumProperty<RailShape>;
  readonly RESPAWN_ANCHOR_CHARGES: IntegerProperty;
  readonly ROTATION_16: IntegerProperty;
  readonly SCULK_SENSOR_PHASE: EnumProperty<SculkSensorPhase>;
  readonly SEGMENT_AMOUNT: IntegerProperty;
  readonly SHORT: BooleanProperty;
  readonly SHRIEKING: BooleanProperty;
  readonly SIGNAL_FIRE: BooleanProperty;
  readonly SLAB_TYPE: EnumProperty<SlabType>;
  readonly SNOWY: BooleanProperty;
  readonly SOUTH: BooleanProperty;
  readonly SOUTH_REDSTONE: EnumProperty<RedstoneSide>;
  readonly SOUTH_WALL: EnumProperty<WallSide>;
  readonly STABILITY_DISTANCE: IntegerProperty;
  readonly STABILITY_MAX_DISTANCE: 7;
  readonly STAGE: IntegerProperty;
  readonly STAIRS_SHAPE: EnumProperty<StairsShape>;
  readonly STRUCTUREBLOCK_MODE: EnumProperty<StructureMode>;
  readonly TEST_BLOCK_MODE: EnumProperty<TestBlockMode>;
  readonly TILT: EnumProperty<Tilt>;
  readonly TIP: BooleanProperty;
  readonly TRIAL_SPAWNER_STATE: EnumProperty<j_net_minecraft_world_level_block_entity_trialspawner.TrialSpawnerState>;
  readonly TRIGGERED: BooleanProperty;
  readonly UNSTABLE: BooleanProperty;
  readonly UP: BooleanProperty;
  readonly VAULT_STATE: EnumProperty<j_net_minecraft_world_level_block_entity_vault.VaultState>;
  readonly VERTICAL_DIRECTION: EnumProperty<j_net_minecraft_core.Direction>;
  readonly WATERLOGGED: BooleanProperty;
  readonly WEST: BooleanProperty;
  readonly WEST_REDSTONE: EnumProperty<RedstoneSide>;
  readonly WEST_WALL: EnumProperty<WallSide>;
}

/** JVM class net.minecraft.world.level.block.state.properties.BooleanProperty. */
export interface BooleanPropertyMembers {
  readonly __javaSupertypes?: readonly [Property<boolean>, JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [boolean]>];
  getInternalIndex(arg0: boolean): number;
  getInternalIndex(arg0: JavaOpaque<"java.lang.Comparable">): number;
  getName(arg0: boolean): string;
  getName(arg0: JavaOpaque<"java.lang.Comparable">): string;
  getPossibleValues(): JavaList<boolean>;
  getValue(arg0: string): JavaOptional<boolean>;
  moonrise$getIdFor(arg0: boolean): number;
  moonrise$getIdFor(arg0: JavaOpaque<"java.lang.Comparable">): number;
  moonrise$getIdFor(arg0: object): number;
}
export type BooleanProperty = BooleanPropertyMembers & Property<boolean> & JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [boolean]>;
export interface BooleanPropertyStatics {
  create(arg0: string): BooleanProperty;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.ChestType; constants are host handles, not strings. */
export type ChestType = JavaEnum<"net.minecraft.world.level.block.state.properties.ChestType", "LEFT" | "RIGHT" | "SINGLE"> & ChestTypeMembers;
export interface ChestTypeMembers {
  getOpposite(): ChestType;
  getSerializedName(): string;
}
export interface ChestTypeStatics {
  readonly LEFT: ChestType;
  readonly RIGHT: ChestType;
  readonly SINGLE: ChestType;
  valueOf(arg0: string): ChestType;
  values(): Array<ChestType>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.ComparatorMode; constants are host handles, not strings. */
export type ComparatorMode = JavaEnum<"net.minecraft.world.level.block.state.properties.ComparatorMode", "COMPARE" | "SUBTRACT"> & ComparatorModeMembers;
export interface ComparatorModeMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface ComparatorModeStatics {
  readonly COMPARE: ComparatorMode;
  readonly SUBTRACT: ComparatorMode;
  valueOf(arg0: string): ComparatorMode;
  values(): Array<ComparatorMode>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.CreakingHeartState; constants are host handles, not strings. */
export type CreakingHeartState = JavaEnum<"net.minecraft.world.level.block.state.properties.CreakingHeartState", "AWAKE" | "DORMANT" | "UPROOTED"> & CreakingHeartStateMembers;
export interface CreakingHeartStateMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface CreakingHeartStateStatics {
  readonly AWAKE: CreakingHeartState;
  readonly DORMANT: CreakingHeartState;
  readonly UPROOTED: CreakingHeartState;
  valueOf(arg0: string): CreakingHeartState;
  values(): Array<CreakingHeartState>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.DoorHingeSide; constants are host handles, not strings. */
export type DoorHingeSide = JavaEnum<"net.minecraft.world.level.block.state.properties.DoorHingeSide", "LEFT" | "RIGHT"> & DoorHingeSideMembers;
export interface DoorHingeSideMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface DoorHingeSideStatics {
  readonly LEFT: DoorHingeSide;
  readonly RIGHT: DoorHingeSide;
  valueOf(arg0: string): DoorHingeSide;
  values(): Array<DoorHingeSide>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.DoubleBlockHalf; constants are host handles, not strings. */
export type DoubleBlockHalf = JavaEnum<"net.minecraft.world.level.block.state.properties.DoubleBlockHalf", "LOWER" | "UPPER"> & DoubleBlockHalfMembers;
export interface DoubleBlockHalfMembers {
  getDirectionToOther(): j_net_minecraft_core.Direction;
  getOtherHalf(): DoubleBlockHalf;
  getSerializedName(): string;
  toString(): string;
}
export interface DoubleBlockHalfStatics {
  readonly LOWER: DoubleBlockHalf;
  readonly UPPER: DoubleBlockHalf;
  valueOf(arg0: string): DoubleBlockHalf;
  values(): Array<DoubleBlockHalf>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.DripstoneThickness; constants are host handles, not strings. */
export type DripstoneThickness = JavaEnum<"net.minecraft.world.level.block.state.properties.DripstoneThickness", "BASE" | "FRUSTUM" | "MIDDLE" | "TIP" | "TIP_MERGE"> & DripstoneThicknessMembers;
export interface DripstoneThicknessMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface DripstoneThicknessStatics {
  readonly BASE: DripstoneThickness;
  readonly FRUSTUM: DripstoneThickness;
  readonly MIDDLE: DripstoneThickness;
  readonly TIP: DripstoneThickness;
  readonly TIP_MERGE: DripstoneThickness;
  valueOf(arg0: string): DripstoneThickness;
  values(): Array<DripstoneThickness>;
}

/** JVM class net.minecraft.world.level.block.state.properties.EnumProperty. */
export interface EnumPropertyMembers<T /* extends j_net_minecraft_util.StringRepresentable */ = unknown> {
  readonly __javaSupertypes?: readonly [Property<T>, JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [T]>];
  equals_unused(arg0: object): boolean;
  generateHashCode(): number;
  getInternalIndex(arg0: JavaOpaque<"java.lang.Comparable">): number;
  getInternalIndex(arg0: T): number;
  getName(arg0: JavaOpaque<"java.lang.Comparable">): string;
  getName(arg0: T): string;
  getPossibleValues(): JavaList<T>;
  getValue(arg0: string): JavaOptional<T>;
  moonrise$getIdFor(arg0: JavaOpaque<"java.lang.Comparable">): number;
  moonrise$getIdFor(arg0: T): number;
  moonrise$getIdFor(arg0: object): number;
}
export type EnumProperty<T /* extends j_net_minecraft_util.StringRepresentable */ = unknown> = EnumPropertyMembers<T> & Property<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [T]>;
export interface EnumPropertyStatics {
  create<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: string, arg1: JavaClass<T>): EnumProperty<T>;
  create<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: string, arg1: JavaClass<T>, arg2: JavaList<T>): EnumProperty<T>;
  create<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: string, arg1: JavaClass<T>, arg2: JavaPredicate<T>): EnumProperty<T>;
  create<T /* extends j_net_minecraft_util.StringRepresentable */>(arg0: string, arg1: JavaClass<T>, ...arg2: Array<T>): EnumProperty<T>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.Half; constants are host handles, not strings. */
export type Half = JavaEnum<"net.minecraft.world.level.block.state.properties.Half", "BOTTOM" | "TOP"> & HalfMembers;
export interface HalfMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface HalfStatics {
  readonly BOTTOM: Half;
  readonly TOP: Half;
  valueOf(arg0: string): Half;
  values(): Array<Half>;
}

/** JVM class net.minecraft.world.level.block.state.properties.IntegerProperty. */
export interface IntegerPropertyMembers {
  readonly __javaSupertypes?: readonly [Property<number>, JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [number]>];
  equals_unused(arg0: object): boolean;
  generateHashCode(): number;
  getInternalIndex(arg0: JavaOpaque<"java.lang.Comparable">): number;
  getInternalIndex(arg0: number): number;
  getName(arg0: JavaOpaque<"java.lang.Comparable">): string;
  getName(arg0: number): string;
  getPossibleValues(): JavaList<number>;
  getValue(arg0: string): JavaOptional<number>;
  readonly max: number;
  readonly min: number;
  moonrise$getIdFor(arg0: JavaOpaque<"java.lang.Comparable">): number;
  moonrise$getIdFor(arg0: number): number;
  moonrise$getIdFor(arg0: object): number;
}
export type IntegerProperty = IntegerPropertyMembers & Property<number> & JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [number]>;
export interface IntegerPropertyStatics {
  create(arg0: string, arg1: number, arg2: number): IntegerProperty;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.NoteBlockInstrument; constants are host handles, not strings. */
export type NoteBlockInstrument = JavaEnum<"net.minecraft.world.level.block.state.properties.NoteBlockInstrument", "BANJO" | "BASEDRUM" | "BASS" | "BELL" | "BIT" | "CHIME" | "COW_BELL" | "CREEPER" | "CUSTOM_HEAD" | "DIDGERIDOO" | "DRAGON" | "FLUTE" | "GUITAR" | "HARP" | "HAT" | "IRON_XYLOPHONE" | "PIGLIN" | "PLING" | "SKELETON" | "SNARE" | "WITHER_SKELETON" | "XYLOPHONE" | "ZOMBIE"> & NoteBlockInstrumentMembers;
export interface NoteBlockInstrumentMembers {
  getSerializedName(): string;
  getSoundEvent(): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  hasCustomSound(): boolean;
  isTunable(): boolean;
  worksAboveNoteBlock(): boolean;
}
export interface NoteBlockInstrumentStatics {
  readonly BANJO: NoteBlockInstrument;
  readonly BASEDRUM: NoteBlockInstrument;
  readonly BASS: NoteBlockInstrument;
  readonly BELL: NoteBlockInstrument;
  readonly BIT: NoteBlockInstrument;
  readonly CHIME: NoteBlockInstrument;
  readonly COW_BELL: NoteBlockInstrument;
  readonly CREEPER: NoteBlockInstrument;
  readonly CUSTOM_HEAD: NoteBlockInstrument;
  readonly DIDGERIDOO: NoteBlockInstrument;
  readonly DRAGON: NoteBlockInstrument;
  readonly FLUTE: NoteBlockInstrument;
  readonly GUITAR: NoteBlockInstrument;
  readonly HARP: NoteBlockInstrument;
  readonly HAT: NoteBlockInstrument;
  readonly IRON_XYLOPHONE: NoteBlockInstrument;
  readonly PIGLIN: NoteBlockInstrument;
  readonly PLING: NoteBlockInstrument;
  readonly SKELETON: NoteBlockInstrument;
  readonly SNARE: NoteBlockInstrument;
  readonly WITHER_SKELETON: NoteBlockInstrument;
  readonly XYLOPHONE: NoteBlockInstrument;
  readonly ZOMBIE: NoteBlockInstrument;
  valueOf(arg0: string): NoteBlockInstrument;
  values(): Array<NoteBlockInstrument>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.PistonType; constants are host handles, not strings. */
export type PistonType = JavaEnum<"net.minecraft.world.level.block.state.properties.PistonType", "DEFAULT" | "STICKY"> & PistonTypeMembers;
export interface PistonTypeMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface PistonTypeStatics {
  readonly DEFAULT: PistonType;
  readonly STICKY: PistonType;
  valueOf(arg0: string): PistonType;
  values(): Array<PistonType>;
}

/** JVM abstract net.minecraft.world.level.block.state.properties.Property. */
export interface PropertyMembers<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [T]>];
  codec(): JavaOpaque<"com.mojang.serialization.Codec", [T]>;
  equals(arg0: object): boolean;
  generateHashCode(): number;
  getAllValues(): JavaOpaque<"java.util.stream.Stream", [Property_Value<T>]>;
  getInternalIndex(arg0: T): number;
  getName(): string;
  getName(arg0: T): string;
  getPossibleValues(): JavaList<T>;
  getValue(arg0: string): JavaOptional<T>;
  getValueClass(): JavaClass<T>;
  hashCode(): number;
  moonrise$getById(arg0: number): T;
  moonrise$getById(arg0: number): object;
  moonrise$getId(): number;
  moonrise$getIdFor(arg0: T): number;
  moonrise$getIdFor(arg0: object): number;
  moonrise$setById(arg0: Array<T>): void;
  moonrise$setById(arg0: Array<object>): void;
  parseValue<U, S /* extends j_net_minecraft_world_level_block_state.StateHolder<object, S> */>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [U]>, arg1: S, arg2: U): JavaOpaque<"com.mojang.serialization.DataResult", [S]>;
  toString(): string;
  value(arg0: T): Property_Value<T>;
  value(arg0: j_net_minecraft_world_level_block_state.StateHolder<object, object>): Property_Value<T>;
  valueCodec(): JavaOpaque<"com.mojang.serialization.Codec", [Property_Value<T>]>;
}
export type Property<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> = PropertyMembers<T> & JavaOpaque<"ca.spottedleaf.moonrise.patches.blockstate_propertyaccess.PropertyAccess", [T]>;
export interface PropertyStatics {
  new<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: string, arg1: JavaClass<T>): Property<T>;
}

/** JVM record net.minecraft.world.level.block.state.properties.Property$Value. */
export interface Property_ValueMembers<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  property(): Property<T>;
  toString(): string;
  value(): T;
}
export type Property_Value<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */ = unknown> = Property_ValueMembers<T> & JavaOpaque<"java.lang.Record">;
export interface Property_ValueStatics {
  new<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: Property<T>, arg1: T): Property_Value<T>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.RailShape; constants are host handles, not strings. */
export type RailShape = JavaEnum<"net.minecraft.world.level.block.state.properties.RailShape", "ASCENDING_EAST" | "ASCENDING_NORTH" | "ASCENDING_SOUTH" | "ASCENDING_WEST" | "EAST_WEST" | "NORTH_EAST" | "NORTH_SOUTH" | "NORTH_WEST" | "SOUTH_EAST" | "SOUTH_WEST"> & RailShapeMembers;
export interface RailShapeMembers {
  getName(): string;
  getSerializedName(): string;
  isSlope(): boolean;
  toString(): string;
}
export interface RailShapeStatics {
  readonly ASCENDING_EAST: RailShape;
  readonly ASCENDING_NORTH: RailShape;
  readonly ASCENDING_SOUTH: RailShape;
  readonly ASCENDING_WEST: RailShape;
  readonly EAST_WEST: RailShape;
  readonly NORTH_EAST: RailShape;
  readonly NORTH_SOUTH: RailShape;
  readonly NORTH_WEST: RailShape;
  readonly SOUTH_EAST: RailShape;
  readonly SOUTH_WEST: RailShape;
  valueOf(arg0: string): RailShape;
  values(): Array<RailShape>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.RedstoneSide; constants are host handles, not strings. */
export type RedstoneSide = JavaEnum<"net.minecraft.world.level.block.state.properties.RedstoneSide", "NONE" | "SIDE" | "UP"> & RedstoneSideMembers;
export interface RedstoneSideMembers {
  getSerializedName(): string;
  isConnected(): boolean;
  toString(): string;
}
export interface RedstoneSideStatics {
  readonly NONE: RedstoneSide;
  readonly SIDE: RedstoneSide;
  readonly UP: RedstoneSide;
  valueOf(arg0: string): RedstoneSide;
  values(): Array<RedstoneSide>;
}

/** JVM class net.minecraft.world.level.block.state.properties.RotationSegment. */
export interface RotationSegmentMembers {
}
export type RotationSegment = RotationSegmentMembers;
export interface RotationSegmentStatics {
  new(): RotationSegment;
  convertToDegrees(arg0: number): number;
  convertToDirection(arg0: number): JavaOptional<j_net_minecraft_core.Direction>;
  convertToSegment(arg0: number): number;
  convertToSegment(arg0: j_net_minecraft_core.Direction): number;
  getMaxSegmentIndex(): number;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.SculkSensorPhase; constants are host handles, not strings. */
export type SculkSensorPhase = JavaEnum<"net.minecraft.world.level.block.state.properties.SculkSensorPhase", "ACTIVE" | "COOLDOWN" | "INACTIVE"> & SculkSensorPhaseMembers;
export interface SculkSensorPhaseMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface SculkSensorPhaseStatics {
  readonly ACTIVE: SculkSensorPhase;
  readonly COOLDOWN: SculkSensorPhase;
  readonly INACTIVE: SculkSensorPhase;
  valueOf(arg0: string): SculkSensorPhase;
  values(): Array<SculkSensorPhase>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.SlabType; constants are host handles, not strings. */
export type SlabType = JavaEnum<"net.minecraft.world.level.block.state.properties.SlabType", "BOTTOM" | "DOUBLE" | "TOP"> & SlabTypeMembers;
export interface SlabTypeMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface SlabTypeStatics {
  readonly BOTTOM: SlabType;
  readonly DOUBLE: SlabType;
  readonly TOP: SlabType;
  valueOf(arg0: string): SlabType;
  values(): Array<SlabType>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.StairsShape; constants are host handles, not strings. */
export type StairsShape = JavaEnum<"net.minecraft.world.level.block.state.properties.StairsShape", "INNER_LEFT" | "INNER_RIGHT" | "OUTER_LEFT" | "OUTER_RIGHT" | "STRAIGHT"> & StairsShapeMembers;
export interface StairsShapeMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface StairsShapeStatics {
  readonly INNER_LEFT: StairsShape;
  readonly INNER_RIGHT: StairsShape;
  readonly OUTER_LEFT: StairsShape;
  readonly OUTER_RIGHT: StairsShape;
  readonly STRAIGHT: StairsShape;
  valueOf(arg0: string): StairsShape;
  values(): Array<StairsShape>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.StructureMode; constants are host handles, not strings. */
export type StructureMode = JavaEnum<"net.minecraft.world.level.block.state.properties.StructureMode", "CORNER" | "DATA" | "LOAD" | "SAVE"> & StructureModeMembers;
export interface StructureModeMembers {
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getSerializedName(): string;
}
export interface StructureModeStatics {
  readonly CORNER: StructureMode;
  readonly DATA: StructureMode;
  readonly LOAD: StructureMode;
  readonly SAVE: StructureMode;
  readonly LEGACY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [StructureMode]>;
  valueOf(arg0: string): StructureMode;
  values(): Array<StructureMode>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.TestBlockMode; constants are host handles, not strings. */
export type TestBlockMode = JavaEnum<"net.minecraft.world.level.block.state.properties.TestBlockMode", "ACCEPT" | "FAIL" | "LOG" | "START"> & TestBlockModeMembers;
export interface TestBlockModeMembers {
  getDetailedMessage(): j_net_minecraft_network_chat.Component;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getSerializedName(): string;
}
export interface TestBlockModeStatics {
  readonly ACCEPT: TestBlockMode;
  readonly FAIL: TestBlockMode;
  readonly LOG: TestBlockMode;
  readonly START: TestBlockMode;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TestBlockMode]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, TestBlockMode>;
  valueOf(arg0: string): TestBlockMode;
  values(): Array<TestBlockMode>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.Tilt; constants are host handles, not strings. */
export type Tilt = JavaEnum<"net.minecraft.world.level.block.state.properties.Tilt", "FULL" | "NONE" | "PARTIAL" | "UNSTABLE"> & TiltMembers;
export interface TiltMembers {
  causesVibration(): boolean;
  getSerializedName(): string;
}
export interface TiltStatics {
  readonly FULL: Tilt;
  readonly NONE: Tilt;
  readonly PARTIAL: Tilt;
  readonly UNSTABLE: Tilt;
  valueOf(arg0: string): Tilt;
  values(): Array<Tilt>;
}

/** Live JVM enum net.minecraft.world.level.block.state.properties.WallSide; constants are host handles, not strings. */
export type WallSide = JavaEnum<"net.minecraft.world.level.block.state.properties.WallSide", "LOW" | "NONE" | "TALL"> & WallSideMembers;
export interface WallSideMembers {
  getSerializedName(): string;
  toString(): string;
}
export interface WallSideStatics {
  readonly LOW: WallSide;
  readonly NONE: WallSide;
  readonly TALL: WallSide;
  valueOf(arg0: string): WallSide;
  values(): Array<WallSide>;
}

/** JVM record net.minecraft.world.level.block.state.properties.WoodType. */
export interface WoodTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  fenceGateClose(): j_net_minecraft_sounds.SoundEvent;
  fenceGateOpen(): j_net_minecraft_sounds.SoundEvent;
  hangingSignSoundType(): j_net_minecraft_world_level_block.SoundType;
  hashCode(): number;
  name(): string;
  setType(): BlockSetType;
  soundType(): j_net_minecraft_world_level_block.SoundType;
  toString(): string;
}
export type WoodType = WoodTypeMembers & JavaOpaque<"java.lang.Record">;
export interface WoodTypeStatics {
  new(arg0: string, arg1: BlockSetType): WoodType;
  new(arg0: string, arg1: BlockSetType, arg2: j_net_minecraft_world_level_block.SoundType, arg3: j_net_minecraft_world_level_block.SoundType, arg4: j_net_minecraft_sounds.SoundEvent, arg5: j_net_minecraft_sounds.SoundEvent): WoodType;
  readonly ACACIA: WoodType;
  readonly BAMBOO: WoodType;
  readonly BIRCH: WoodType;
  readonly CHERRY: WoodType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [WoodType]>;
  readonly CRIMSON: WoodType;
  readonly DARK_OAK: WoodType;
  readonly JUNGLE: WoodType;
  readonly MANGROVE: WoodType;
  readonly OAK: WoodType;
  readonly PALE_OAK: WoodType;
  readonly SPRUCE: WoodType;
  readonly WARPED: WoodType;
  values(): JavaOpaque<"java.util.stream.Stream", [WoodType]>;
}
