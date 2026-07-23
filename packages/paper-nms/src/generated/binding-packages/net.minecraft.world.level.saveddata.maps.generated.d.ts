// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_saveddata from './net.minecraft.world.level.saveddata.generated.js';
import type * as j_org_bukkit_craftbukkit_map from './org.bukkit.craftbukkit.map.generated.js';

/** JVM record net.minecraft.world.level.saveddata.maps.MapBanner. */
export interface MapBannerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  color(): j_net_minecraft_world_item.DyeColor;
  equals(arg0: object): boolean;
  getDecoration(): j_net_minecraft_core.Holder<MapDecorationType>;
  getId(): string;
  hashCode(): number;
  name(): JavaOptional<j_net_minecraft_network_chat.Component>;
  pos(): j_net_minecraft_core.BlockPos;
  toString(): string;
}
export type MapBanner = MapBannerMembers & JavaOpaque<"java.lang.Record">;
export interface MapBannerStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_item.DyeColor, arg2: JavaOptional<j_net_minecraft_network_chat.Component>): MapBanner;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapBanner]>;
  fromWorld(arg0: j_net_minecraft_world_level.BlockGetter, arg1: j_net_minecraft_core.BlockPos): MapBanner | null;
}

/** JVM record net.minecraft.world.level.saveddata.maps.MapDecoration. */
export interface MapDecorationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  getSpriteLocation(): j_net_minecraft_resources.ResourceLocation;
  hashCode(): number;
  name(): JavaOptional<j_net_minecraft_network_chat.Component>;
  renderOnFrame(): boolean;
  rot(): number;
  toString(): string;
  type(): j_net_minecraft_core.Holder<MapDecorationType>;
  x(): number;
  y(): number;
}
export type MapDecoration = MapDecorationMembers & JavaOpaque<"java.lang.Record">;
export interface MapDecorationStatics {
  new(arg0: j_net_minecraft_core.Holder<MapDecorationType>, arg1: number, arg2: number, arg3: number, arg4: JavaOptional<j_net_minecraft_network_chat.Component>): MapDecoration;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, MapDecoration>;
}

/** JVM record net.minecraft.world.level.saveddata.maps.MapDecorationType. */
export interface MapDecorationTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  assetId(): j_net_minecraft_resources.ResourceLocation;
  equals(arg0: object): boolean;
  explorationMapElement(): boolean;
  hasMapColor(): boolean;
  hashCode(): number;
  mapColor(): number;
  showOnItemFrame(): boolean;
  toString(): string;
  trackCount(): boolean;
}
export type MapDecorationType = MapDecorationTypeMembers & JavaOpaque<"java.lang.Record">;
export interface MapDecorationTypeStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean): MapDecorationType;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<MapDecorationType>]>;
  readonly NO_MAP_COLOR: -1;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.RegistryFriendlyByteBuf, j_net_minecraft_core.Holder<MapDecorationType>>;
}

/** JVM class net.minecraft.world.level.saveddata.maps.MapDecorationTypes. */
export interface MapDecorationTypesMembers {
}
export type MapDecorationTypes = MapDecorationTypesMembers;
export interface MapDecorationTypesStatics {
  new(): MapDecorationTypes;
  readonly BLACK_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly BLUE_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly BLUE_MARKER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly BROWN_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly CYAN_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly DESERT_VILLAGE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly FRAME: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly GRAY_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly GREEN_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly JUNGLE_TEMPLE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly LIGHT_BLUE_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly LIGHT_GRAY_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly LIME_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly MAGENTA_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly OCEAN_MONUMENT: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly ORANGE_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PINK_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PLAINS_VILLAGE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PLAYER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PLAYER_OFF_LIMITS: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PLAYER_OFF_MAP: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly PURPLE_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly RED_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly RED_MARKER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly RED_X: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly SAVANNA_VILLAGE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly SNOWY_VILLAGE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly SWAMP_HUT: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly TAIGA_VILLAGE: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly TARGET_POINT: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly TARGET_X: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly TRIAL_CHAMBERS: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly WHITE_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly WOODLAND_MANSION: j_net_minecraft_core.Holder<MapDecorationType>;
  readonly YELLOW_BANNER: j_net_minecraft_core.Holder<MapDecorationType>;
  bootstrap(arg0: j_net_minecraft_core.Registry<MapDecorationType>): j_net_minecraft_core.Holder<MapDecorationType>;
}

/** JVM record net.minecraft.world.level.saveddata.maps.MapFrame. */
export interface MapFrameMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entityId(): number;
  equals(arg0: object): boolean;
  getId(): string;
  hashCode(): number;
  pos(): j_net_minecraft_core.BlockPos;
  rotation(): number;
  toString(): string;
}
export type MapFrame = MapFrameMembers & JavaOpaque<"java.lang.Record">;
export interface MapFrameStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number): MapFrame;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapFrame]>;
  frameId(arg0: j_net_minecraft_core.BlockPos): string;
}

/** JVM record net.minecraft.world.level.saveddata.maps.MapId. */
export interface MapIdMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, j_net_minecraft_world_item_component.TooltipProvider];
  addToTooltip(arg0: j_net_minecraft_world_item.Item_TooltipContext, arg1: JavaConsumer<j_net_minecraft_network_chat.Component>, arg2: j_net_minecraft_world_item.TooltipFlag, arg3: j_net_minecraft_core_component.DataComponentGetter): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): number;
  key(): string;
  toString(): string;
}
export type MapId = MapIdMembers & JavaOpaque<"java.lang.Record"> & j_net_minecraft_world_item_component.TooltipProvider;
export interface MapIdStatics {
  new(arg0: number): MapId;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapId]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, MapId>;
}

/** JVM class net.minecraft.world.level.saveddata.maps.MapIndex. */
export interface MapIndexMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  getNextMapId(): MapId;
}
export type MapIndex = MapIndexMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface MapIndexStatics {
  new(): MapIndex;
  new(arg0: number): MapIndex;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapIndex]>;
  readonly TYPE: j_net_minecraft_world_level_saveddata.SavedDataType<MapIndex>;
}

/** JVM class net.minecraft.world.level.saveddata.maps.MapItemSavedData. */
export interface MapItemSavedDataMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_level_saveddata.SavedData];
  addClientSideDecorations(arg0: JavaList<MapDecoration>): void;
  readonly carriedBy: JavaList<MapItemSavedData_HoldingPlayer>;
  readonly carriedByPlayers: JavaMap<j_net_minecraft_world_entity_player.Player, MapItemSavedData_HoldingPlayer>;
  centerX: number;
  centerZ: number;
  checkBanners(arg0: j_net_minecraft_world_level.BlockGetter, arg1: number, arg2: number): void;
  colors: Array<number>;
  readonly decorations: JavaMap<string, MapDecoration>;
  dimension: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>;
  getBanners(): JavaCollection<MapBanner>;
  getDecorations(): Iterable<MapDecoration>;
  getHoldingPlayer(arg0: j_net_minecraft_world_entity_player.Player): MapItemSavedData_HoldingPlayer;
  getUpdatePacket(arg0: MapId, arg1: j_net_minecraft_world_entity_player.Player): j_net_minecraft_network_protocol.Packet<object> | null;
  id: MapId;
  isExplorationMap(): boolean;
  isTrackedCountOverLimit(arg0: number): boolean;
  locked: (boolean) & { (): MapItemSavedData };
  readonly mapView: j_org_bukkit_craftbukkit_map.CraftMapView;
  removedFromFrame(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  scale: number;
  scaled(): MapItemSavedData;
  setColor(arg0: number, arg1: number, arg2: number): void;
  setColorsDirty(arg0: number, arg1: number): void;
  setColorsDirty(arg0: number, arg1: number, arg2: boolean): void;
  setDecorationsDirty(): void;
  tickCarriedBy(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack): void;
  toggleBanner(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: j_net_minecraft_core.BlockPos): boolean;
  trackingPosition: boolean;
  uniqueId: JavaOpaque<"java.util.UUID">;
  unlimitedTracking: boolean;
  updateColor(arg0: number, arg1: number, arg2: number): boolean;
}
export type MapItemSavedData = MapItemSavedDataMembers & j_net_minecraft_world_level_saveddata.SavedData;
export interface MapItemSavedDataStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MapItemSavedData]>;
  readonly MAX_SCALE: 4;
  readonly TRACKED_DECORATION_LIMIT: 256;
  addTargetDecoration(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_core.BlockPos, arg2: string, arg3: j_net_minecraft_core.Holder<MapDecorationType>): void;
  createForClient(arg0: number, arg1: boolean, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): MapItemSavedData;
  createFresh(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level.Level>): MapItemSavedData;
  type(arg0: MapId): j_net_minecraft_world_level_saveddata.SavedDataType<MapItemSavedData>;
}

/** JVM class net.minecraft.world.level.saveddata.maps.MapItemSavedData$HoldingPlayer. */
export interface MapItemSavedData_HoldingPlayerMembers {
  readonly player: j_net_minecraft_world_entity_player.Player;
  step: number;
}
export type MapItemSavedData_HoldingPlayer = MapItemSavedData_HoldingPlayerMembers;
export interface MapItemSavedData_HoldingPlayerStatics {
}

/** JVM record net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch. */
export interface MapItemSavedData_MapPatchMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  applyToMap(arg0: MapItemSavedData): void;
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): number;
  mapColors(): Array<number>;
  startX(): number;
  startY(): number;
  toString(): string;
  width(): number;
}
export type MapItemSavedData_MapPatch = MapItemSavedData_MapPatchMembers & JavaOpaque<"java.lang.Record">;
export interface MapItemSavedData_MapPatchStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Array<number>): MapItemSavedData_MapPatch;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaOptional<MapItemSavedData_MapPatch>>;
}
