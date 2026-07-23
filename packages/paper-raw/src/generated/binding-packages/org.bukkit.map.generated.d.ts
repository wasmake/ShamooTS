// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_util from './org.bukkit.util.generated.js';

/** JVM interface org.bukkit.map.MapCanvas. */
export interface MapCanvasMembers {
  drawImage(arg0: number, arg1: number, arg2: JavaOpaque<"java.awt.Image">): void;
  drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
  getBasePixel(arg0: number, arg1: number): number;
  getBasePixelColor(arg0: number, arg1: number): JavaOpaque<"java.awt.Color">;
  getCursors(): MapCursorCollection;
  getMapView(): MapView;
  getPixel(arg0: number, arg1: number): number;
  getPixelColor(arg0: number, arg1: number): JavaOpaque<"java.awt.Color"> | null;
  setCursors(arg0: MapCursorCollection): void;
  setPixel(arg0: number, arg1: number, arg2: number): void;
  setPixelColor(arg0: number, arg1: number, arg2: JavaOpaque<"java.awt.Color"> | null): void | null;
}
export type MapCanvas = MapCanvasMembers;
export interface MapCanvasStatics {
}

/** JVM class org.bukkit.map.MapCursor. */
export interface MapCursorMembers {
  caption(): j_net_kyori_adventure_text.Component | null;
  caption(arg0: j_net_kyori_adventure_text.Component): void | null;
  getCaption(): string | null;
  getDirection(): number;
  getRawType(): number;
  getType(): MapCursor_Type;
  getX(): number;
  getY(): number;
  isVisible(): boolean;
  setCaption(arg0: string | null): void | null;
  setDirection(arg0: number): void;
  setRawType(arg0: number): void;
  setType(arg0: MapCursor_Type): void;
  setVisible(arg0: boolean): void;
  setX(arg0: number): void;
  setY(arg0: number): void;
}
export type MapCursor = MapCursorMembers;
export interface MapCursorStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): MapCursor;
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string | null): MapCursor;
  new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: j_net_kyori_adventure_text.Component): MapCursor;
  new(arg0: number, arg1: number, arg2: number, arg3: MapCursor_Type, arg4: boolean): MapCursor;
  new(arg0: number, arg1: number, arg2: number, arg3: MapCursor_Type, arg4: boolean, arg5: string | null): MapCursor;
  new(arg0: number, arg1: number, arg2: number, arg3: MapCursor_Type, arg4: boolean, arg5: j_net_kyori_adventure_text.Component): MapCursor;
}

/** JVM interface org.bukkit.map.MapCursor$Type. */
export interface MapCursor_TypeMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_util.OldEnum<MapCursor_Type>, j_org_bukkit.Keyed];
  compareTo(arg0: object): number;
  compareTo(arg0: MapCursor_Type): number;
  getKey(): j_org_bukkit.NamespacedKey;
  getValue(): number;
  key(): JavaOpaque<"net.kyori.adventure.key.Key">;
  name(): string;
  ordinal(): number;
}
export type MapCursor_Type = MapCursor_TypeMembers & j_org_bukkit.Keyed;
export interface MapCursor_TypeStatics {
  readonly BANNER_BLACK: MapCursor_Type;
  readonly BANNER_BLUE: MapCursor_Type;
  readonly BANNER_BROWN: MapCursor_Type;
  readonly BANNER_CYAN: MapCursor_Type;
  readonly BANNER_GRAY: MapCursor_Type;
  readonly BANNER_GREEN: MapCursor_Type;
  readonly BANNER_LIGHT_BLUE: MapCursor_Type;
  readonly BANNER_LIGHT_GRAY: MapCursor_Type;
  readonly BANNER_LIME: MapCursor_Type;
  readonly BANNER_MAGENTA: MapCursor_Type;
  readonly BANNER_ORANGE: MapCursor_Type;
  readonly BANNER_PINK: MapCursor_Type;
  readonly BANNER_PURPLE: MapCursor_Type;
  readonly BANNER_RED: MapCursor_Type;
  readonly BANNER_WHITE: MapCursor_Type;
  readonly BANNER_YELLOW: MapCursor_Type;
  readonly BLUE_MARKER: MapCursor_Type;
  readonly FRAME: MapCursor_Type;
  readonly JUNGLE_TEMPLE: MapCursor_Type;
  readonly MANSION: MapCursor_Type;
  readonly MONUMENT: MapCursor_Type;
  readonly PLAYER: MapCursor_Type;
  readonly PLAYER_OFF_LIMITS: MapCursor_Type;
  readonly PLAYER_OFF_MAP: MapCursor_Type;
  readonly RED_MARKER: MapCursor_Type;
  readonly RED_X: MapCursor_Type;
  readonly SWAMP_HUT: MapCursor_Type;
  readonly TARGET_POINT: MapCursor_Type;
  readonly TARGET_X: MapCursor_Type;
  readonly TRIAL_CHAMBERS: MapCursor_Type;
  readonly VILLAGE_DESERT: MapCursor_Type;
  readonly VILLAGE_PLAINS: MapCursor_Type;
  readonly VILLAGE_SAVANNA: MapCursor_Type;
  readonly VILLAGE_SNOWY: MapCursor_Type;
  readonly VILLAGE_TAIGA: MapCursor_Type;
  byValue(arg0: number): MapCursor_Type | null;
  valueOf(arg0: string): MapCursor_Type;
  values(): Array<MapCursor_Type>;
}

/** JVM class org.bukkit.map.MapCursorCollection. */
export interface MapCursorCollectionMembers {
  addCursor(arg0: number, arg1: number, arg2: number): MapCursor;
  addCursor(arg0: number, arg1: number, arg2: number, arg3: number): MapCursor;
  addCursor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): MapCursor;
  addCursor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string | null): MapCursor | null;
  addCursor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: j_net_kyori_adventure_text.Component): MapCursor | null;
  addCursor(arg0: MapCursor): MapCursor;
  getCursor(arg0: number): MapCursor;
  removeCursor(arg0: MapCursor): boolean;
  size(): number;
}
export type MapCursorCollection = MapCursorCollectionMembers;
export interface MapCursorCollectionStatics {
  new(): MapCursorCollection;
}

/** JVM class org.bukkit.map.MapFont. */
export interface MapFontMembers {
  getChar(arg0: string): MapFont_CharacterSprite | null;
  getHeight(): number;
  getWidth(arg0: string): number;
  isValid(arg0: string): boolean;
  malleable: boolean;
  setChar(arg0: string, arg1: MapFont_CharacterSprite): void;
}
export type MapFont = MapFontMembers;
export interface MapFontStatics {
  new(): MapFont;
}

/** JVM class org.bukkit.map.MapFont$CharacterSprite. */
export interface MapFont_CharacterSpriteMembers {
  get(arg0: number, arg1: number): boolean;
  getHeight(): number;
  getWidth(): number;
}
export type MapFont_CharacterSprite = MapFont_CharacterSpriteMembers;
export interface MapFont_CharacterSpriteStatics {
  new(arg0: number, arg1: number, arg2: Array<boolean>): MapFont_CharacterSprite;
}

/** JVM class org.bukkit.map.MapPalette. */
export interface MapPaletteMembers {
}
export type MapPalette = MapPaletteMembers;
export interface MapPaletteStatics {
  readonly BLUE: 48;
  readonly BROWN: 40;
  readonly DARK_BROWN: 52;
  readonly DARK_GRAY: 44;
  readonly DARK_GREEN: 28;
  readonly GRAY_1: 12;
  readonly GRAY_2: 24;
  readonly LIGHT_BROWN: 8;
  readonly LIGHT_GRAY: 36;
  readonly LIGHT_GREEN: 4;
  readonly PALE_BLUE: 20;
  readonly RED: 16;
  readonly TRANSPARENT: 0;
  readonly WHITE: 32;
  getColor(arg0: number): JavaOpaque<"java.awt.Color">;
  imageToBytes(arg0: JavaOpaque<"java.awt.Image">): Array<number>;
  matchColor(arg0: number, arg1: number, arg2: number): number;
  matchColor(arg0: JavaOpaque<"java.awt.Color">): number;
  resizeImage(arg0: JavaOpaque<"java.awt.Image"> | null): JavaOpaque<"java.awt.image.BufferedImage"> | null;
  setMapColorCache(arg0: MapPalette_MapColorCache): void;
}

/** JVM interface org.bukkit.map.MapPalette$MapColorCache. */
export interface MapPalette_MapColorCacheMembers {
  isCached(): boolean;
  matchColor(arg0: JavaOpaque<"java.awt.Color">): number;
}
export type MapPalette_MapColorCache = MapPalette_MapColorCacheMembers;
export interface MapPalette_MapColorCacheStatics {
}

/** JVM abstract org.bukkit.map.MapRenderer. */
export interface MapRendererMembers {
  initialize(arg0: MapView): void;
  isContextual(): boolean;
  render(arg0: MapView, arg1: MapCanvas, arg2: j_org_bukkit_entity.Player): void;
}
export type MapRenderer = MapRendererMembers;
export interface MapRendererStatics {
  new(): MapRenderer;
  new(arg0: boolean): MapRenderer;
}

/** JVM interface org.bukkit.map.MapView. */
export interface MapViewMembers {
  addRenderer(arg0: MapRenderer): void;
  getCenterX(): number;
  getCenterZ(): number;
  getId(): number;
  getRenderers(): JavaList<MapRenderer>;
  getScale(): MapView_Scale;
  getWorld(): j_org_bukkit.World | null;
  isLocked(): boolean;
  isTrackingPosition(): boolean;
  isUnlimitedTracking(): boolean;
  isVirtual(): boolean;
  removeRenderer(arg0: MapRenderer | null): boolean | null;
  setCenterX(arg0: number): void;
  setCenterZ(arg0: number): void;
  setLocked(arg0: boolean): void;
  setScale(arg0: MapView_Scale): void;
  setTrackingPosition(arg0: boolean): void;
  setUnlimitedTracking(arg0: boolean): void;
  setWorld(arg0: j_org_bukkit.World): void;
}
export type MapView = MapViewMembers;
export interface MapViewStatics {
}

/** Live JVM enum org.bukkit.map.MapView$Scale; constants are host handles, not strings. */
export type MapView_Scale = JavaEnum<"org.bukkit.map.MapView$Scale", "CLOSE" | "CLOSEST" | "FAR" | "FARTHEST" | "NORMAL"> & MapView_ScaleMembers;
export interface MapView_ScaleMembers {
  getValue(): number;
}
export interface MapView_ScaleStatics {
  readonly CLOSE: MapView_Scale;
  readonly CLOSEST: MapView_Scale;
  readonly FAR: MapView_Scale;
  readonly FARTHEST: MapView_Scale;
  readonly NORMAL: MapView_Scale;
  valueOf(arg0: number): MapView_Scale | null;
  valueOf(arg0: string): MapView_Scale;
  values(): Array<MapView_Scale>;
}

/** JVM class org.bukkit.map.MinecraftFont. */
export interface MinecraftFontMembers {
  readonly __javaSupertypes?: readonly [MapFont];
}
export type MinecraftFont = MinecraftFontMembers & MapFont;
export interface MinecraftFontStatics {
  new(): MinecraftFont;
  readonly Font: MinecraftFont;
}
