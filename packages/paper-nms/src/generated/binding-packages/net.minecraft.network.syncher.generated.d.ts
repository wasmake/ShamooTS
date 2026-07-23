// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_armadillo from './net.minecraft.world.entity.animal.armadillo.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_entity_animal_sniffer from './net.minecraft.world.entity.animal.sniffer.generated.js';
import type * as j_net_minecraft_world_entity_animal_wolf from './net.minecraft.world.entity.animal.wolf.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';

/** JVM record net.minecraft.network.syncher.EntityDataAccessor. */
export interface EntityDataAccessorMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): number;
  serializer(): EntityDataSerializer<T>;
  toString(): string;
}
export type EntityDataAccessor<T = unknown> = EntityDataAccessorMembers<T> & JavaOpaque<"java.lang.Record">;
export interface EntityDataAccessorStatics {
  new<T>(arg0: number, arg1: EntityDataSerializer<T>): EntityDataAccessor<T>;
}

/** JVM interface net.minecraft.network.syncher.EntityDataSerializer. */
export interface EntityDataSerializerMembers<T = unknown> {
  codec(): j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>;
  copy(arg0: T): T;
  createAccessor(arg0: number): EntityDataAccessor<T>;
}
export type EntityDataSerializer<T = unknown> = EntityDataSerializerMembers<T>;
export interface EntityDataSerializerStatics {
  forValueType<T>(arg0: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, T>): EntityDataSerializer<T>;
}

/** JVM interface net.minecraft.network.syncher.EntityDataSerializer$ForValueType. */
export interface EntityDataSerializer_ForValueTypeMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [EntityDataSerializer<T>];
  copy(arg0: T): T;
}
export type EntityDataSerializer_ForValueType<T = unknown> = EntityDataSerializer_ForValueTypeMembers<T> & EntityDataSerializer<T>;
export interface EntityDataSerializer_ForValueTypeStatics {
}

/** JVM class net.minecraft.network.syncher.EntityDataSerializers. */
export interface EntityDataSerializersMembers {
}
export type EntityDataSerializers = EntityDataSerializersMembers;
export interface EntityDataSerializersStatics {
  readonly ARMADILLO_STATE: EntityDataSerializer<j_net_minecraft_world_entity_animal_armadillo.Armadillo_ArmadilloState>;
  readonly BLOCK_POS: EntityDataSerializer<j_net_minecraft_core.BlockPos>;
  readonly BLOCK_STATE: EntityDataSerializer<j_net_minecraft_world_level_block_state.BlockState>;
  readonly BOOLEAN: EntityDataSerializer<boolean>;
  readonly BYTE: EntityDataSerializer<number>;
  readonly CAT_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CatVariant>>;
  readonly CHICKEN_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.ChickenVariant>>;
  readonly COMPONENT: EntityDataSerializer<j_net_minecraft_network_chat.Component>;
  readonly COMPOUND_TAG: EntityDataSerializer<j_net_minecraft_nbt.CompoundTag>;
  readonly COW_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.CowVariant>>;
  readonly DIRECTION: EntityDataSerializer<j_net_minecraft_core.Direction>;
  readonly FLOAT: EntityDataSerializer<number>;
  readonly FROG_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_frog.FrogVariant>>;
  readonly INT: EntityDataSerializer<number>;
  readonly ITEM_STACK: EntityDataSerializer<j_net_minecraft_world_item.ItemStack>;
  readonly LONG: EntityDataSerializer<bigint>;
  readonly OPTIONAL_BLOCK_POS: EntityDataSerializer<JavaOptional<j_net_minecraft_core.BlockPos>>;
  readonly OPTIONAL_BLOCK_STATE: EntityDataSerializer<JavaOptional<j_net_minecraft_world_level_block_state.BlockState>>;
  readonly OPTIONAL_COMPONENT: EntityDataSerializer<JavaOptional<j_net_minecraft_network_chat.Component>>;
  readonly OPTIONAL_GLOBAL_POS: EntityDataSerializer<JavaOptional<j_net_minecraft_core.GlobalPos>>;
  readonly OPTIONAL_LIVING_ENTITY_REFERENCE: EntityDataSerializer<JavaOptional<j_net_minecraft_world_entity.EntityReference<j_net_minecraft_world_entity.LivingEntity>>>;
  readonly OPTIONAL_UNSIGNED_INT: EntityDataSerializer<JavaOptionalNumber>;
  readonly OVERSIZED_ITEM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_world_item.ItemStack>;
  readonly PAINTING_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_decoration.PaintingVariant>>;
  readonly PARTICLE: EntityDataSerializer<j_net_minecraft_core_particles.ParticleOptions>;
  readonly PARTICLES: EntityDataSerializer<JavaList<j_net_minecraft_core_particles.ParticleOptions>>;
  readonly PIG_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal.PigVariant>>;
  readonly POSE: EntityDataSerializer<j_net_minecraft_world_entity.Pose>;
  readonly QUATERNION: EntityDataSerializer<JavaOpaque<"org.joml.Quaternionf">>;
  readonly ROTATIONS: EntityDataSerializer<j_net_minecraft_core.Rotations>;
  readonly SNIFFER_STATE: EntityDataSerializer<j_net_minecraft_world_entity_animal_sniffer.Sniffer_State>;
  readonly STRING: EntityDataSerializer<string>;
  readonly VECTOR3: EntityDataSerializer<JavaOpaque<"org.joml.Vector3f">>;
  readonly VILLAGER_DATA: EntityDataSerializer<j_net_minecraft_world_entity_npc.VillagerData>;
  readonly WOLF_SOUND_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfSoundVariant>>;
  readonly WOLF_VARIANT: EntityDataSerializer<j_net_minecraft_core.Holder<j_net_minecraft_world_entity_animal_wolf.WolfVariant>>;
  getSerializedId(arg0: EntityDataSerializer<object>): number;
  getSerializer(arg0: number): EntityDataSerializer<object> | null;
  registerSerializer(arg0: EntityDataSerializer<object>): void;
}

/** JVM interface net.minecraft.network.syncher.SyncedDataHolder. */
export interface SyncedDataHolderMembers {
  onSyncedDataUpdated(arg0: JavaList<SynchedEntityData_DataValue<object>>): void;
  onSyncedDataUpdated(arg0: EntityDataAccessor<object>): void;
}
export type SyncedDataHolder = SyncedDataHolderMembers;
export interface SyncedDataHolderStatics {
}

/** JVM class net.minecraft.network.syncher.SynchedEntityData. */
export interface SynchedEntityDataMembers {
  assignValues(arg0: JavaList<SynchedEntityData_DataValue<object>>): void;
  get<T>(arg0: EntityDataAccessor<T>): T;
  getItem<T>(arg0: EntityDataAccessor<T>): SynchedEntityData_DataItem<T>;
  getNonDefaultValues(): JavaList<SynchedEntityData_DataValue<object>> | null;
  isDirty(): boolean;
  markDirty<T>(arg0: EntityDataAccessor<T>): void;
  packAll(): JavaList<SynchedEntityData_DataValue<object>>;
  packDirty(): JavaList<SynchedEntityData_DataValue<object>> | null;
  set<T>(arg0: EntityDataAccessor<T>, arg1: T): void;
  set<T>(arg0: EntityDataAccessor<T>, arg1: T, arg2: boolean): void;
}
export type SynchedEntityData = SynchedEntityDataMembers;
export interface SynchedEntityDataStatics {
  defineId<T>(arg0: JavaClass<SyncedDataHolder>, arg1: EntityDataSerializer<T>): EntityDataAccessor<T>;
}

/** JVM class net.minecraft.network.syncher.SynchedEntityData$Builder. */
export interface SynchedEntityData_BuilderMembers {
  build(): SynchedEntityData;
  define<T>(arg0: EntityDataAccessor<T>, arg1: T): SynchedEntityData_Builder;
}
export type SynchedEntityData_Builder = SynchedEntityData_BuilderMembers;
export interface SynchedEntityData_BuilderStatics {
  new(arg0: SyncedDataHolder): SynchedEntityData_Builder;
}

/** JVM class net.minecraft.network.syncher.SynchedEntityData$DataItem. */
export interface SynchedEntityData_DataItemMembers<T = unknown> {
  getAccessor(): EntityDataAccessor<T>;
  getValue(): T;
  isDirty(): boolean;
  isSetToDefault(): boolean;
  setDirty(arg0: boolean): void;
  setValue(arg0: T): void;
  value(): SynchedEntityData_DataValue<T>;
}
export type SynchedEntityData_DataItem<T = unknown> = SynchedEntityData_DataItemMembers<T>;
export interface SynchedEntityData_DataItemStatics {
  new<T>(arg0: EntityDataAccessor<T>, arg1: T): SynchedEntityData_DataItem<T>;
}

/** JVM record net.minecraft.network.syncher.SynchedEntityData$DataValue. */
export interface SynchedEntityData_DataValueMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): number;
  serializer(): EntityDataSerializer<T>;
  toString(): string;
  value(): T;
  write(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf): void;
}
export type SynchedEntityData_DataValue<T = unknown> = SynchedEntityData_DataValueMembers<T> & JavaOpaque<"java.lang.Record">;
export interface SynchedEntityData_DataValueStatics {
  new<T>(arg0: number, arg1: EntityDataSerializer<T>, arg2: T): SynchedEntityData_DataValue<T>;
  create<T>(arg0: EntityDataAccessor<T>, arg1: T): SynchedEntityData_DataValue<T>;
  read(arg0: j_net_minecraft_network.RegistryFriendlyByteBuf, arg1: number): SynchedEntityData_DataValue<object>;
}
