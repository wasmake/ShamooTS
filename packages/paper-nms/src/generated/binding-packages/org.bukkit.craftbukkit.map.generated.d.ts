// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_world_level_saveddata_maps from './net.minecraft.world.level.saveddata.maps.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM class org.bukkit.craftbukkit.map.CraftMapCanvas. */
export interface CraftMapCanvasMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.map.MapCanvas">];
  drawImage(arg0: number, arg1: number, arg2: JavaOpaque<"java.awt.Image">): void;
  drawText(arg0: number, arg1: number, arg2: JavaOpaque<"org.bukkit.map.MapFont">, arg3: string): void;
  getBasePixel(arg0: number, arg1: number): number;
  getBasePixelColor(arg0: number, arg1: number): JavaOpaque<"java.awt.Color">;
  getBuffer(): Array<number>;
  getCursors(): JavaOpaque<"org.bukkit.map.MapCursorCollection">;
  getMapView(): CraftMapView;
  getMapView(): JavaOpaque<"org.bukkit.map.MapView">;
  getPixel(arg0: number, arg1: number): number;
  getPixelColor(arg0: number, arg1: number): JavaOpaque<"java.awt.Color">;
  setBase(arg0: Array<number>): void;
  setCursors(arg0: JavaOpaque<"org.bukkit.map.MapCursorCollection">): void;
  setPixel(arg0: number, arg1: number, arg2: number): void;
  setPixelColor(arg0: number, arg1: number, arg2: JavaOpaque<"java.awt.Color">): void;
}
export type CraftMapCanvas = CraftMapCanvasMembers & JavaOpaque<"org.bukkit.map.MapCanvas">;
export interface CraftMapCanvasStatics {
  new(arg0: CraftMapView): CraftMapCanvas;
}

/** JVM class org.bukkit.craftbukkit.map.CraftMapColorCache. */
export interface CraftMapColorCacheMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.map.MapPalette$MapColorCache">];
  initCache(): PromiseLike<void>;
  isCached(): boolean;
  matchColor(arg0: JavaOpaque<"java.awt.Color">): number;
}
export type CraftMapColorCache = CraftMapColorCacheMembers & JavaOpaque<"org.bukkit.map.MapPalette$MapColorCache">;
export interface CraftMapColorCacheStatics {
  new(arg0: JavaOpaque<"java.util.logging.Logger">): CraftMapColorCache;
  bytesToString(arg0: Array<number>): string;
  main(arg0: Array<string>): void;
}

/** JVM class org.bukkit.craftbukkit.map.CraftMapCursor. */
export interface CraftMapCursorMembers {
}
export type CraftMapCursor = CraftMapCursorMembers;
export interface CraftMapCursorStatics {
  new(): CraftMapCursor;
}

/** JVM class org.bukkit.craftbukkit.map.CraftMapCursor$CraftType. */
export interface CraftMapCursor_CraftTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.map.MapCursor$Type">, j_net_minecraft_world_level_saveddata_maps.MapDecorationType]>, JavaOpaque<"org.bukkit.map.MapCursor$Type">];
  getValue(): number;
}
export type CraftMapCursor_CraftType = CraftMapCursor_CraftTypeMembers & JavaOpaque<"io.papermc.paper.util.OldEnumHolderable", [JavaOpaque<"org.bukkit.map.MapCursor$Type">, j_net_minecraft_world_level_saveddata_maps.MapDecorationType]> & JavaOpaque<"org.bukkit.map.MapCursor$Type">;
export interface CraftMapCursor_CraftTypeStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>): CraftMapCursor_CraftType;
  bukkitToMinecraft(arg0: JavaOpaque<"org.bukkit.map.MapCursor$Type">): j_net_minecraft_world_level_saveddata_maps.MapDecorationType;
  bukkitToMinecraftHolder(arg0: JavaOpaque<"org.bukkit.map.MapCursor$Type">): j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>;
  minecraftHolderToBukkit(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_saveddata_maps.MapDecorationType>): JavaOpaque<"org.bukkit.map.MapCursor$Type">;
  minecraftToBukkit(arg0: j_net_minecraft_world_level_saveddata_maps.MapDecorationType): JavaOpaque<"org.bukkit.map.MapCursor$Type">;
}

/** JVM class org.bukkit.craftbukkit.map.CraftMapRenderer. */
export interface CraftMapRendererMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.map.MapRenderer">];
  render(arg0: JavaOpaque<"org.bukkit.map.MapView">, arg1: JavaOpaque<"org.bukkit.map.MapCanvas">, arg2: JavaOpaque<"org.bukkit.entity.Player">): void;
}
export type CraftMapRenderer = CraftMapRendererMembers & JavaOpaque<"org.bukkit.map.MapRenderer">;
export interface CraftMapRendererStatics {
  new(arg0: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData): CraftMapRenderer;
}

/** JVM class org.bukkit.craftbukkit.map.CraftMapView. */
export interface CraftMapViewMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.map.MapView">];
  addRenderer(arg0: JavaOpaque<"org.bukkit.map.MapRenderer">): void;
  getCenterX(): number;
  getCenterZ(): number;
  getId(): number;
  getRenderers(): JavaList<JavaOpaque<"org.bukkit.map.MapRenderer">>;
  getScale(): JavaOpaque<"org.bukkit.map.MapView$Scale">;
  getWorld(): JavaOpaque<"org.bukkit.World">;
  isLocked(): boolean;
  isTrackingPosition(): boolean;
  isUnlimitedTracking(): boolean;
  isVirtual(): boolean;
  removeRenderer(arg0: JavaOpaque<"org.bukkit.map.MapRenderer">): boolean;
  render(arg0: j_org_bukkit_craftbukkit_entity.CraftPlayer): RenderData;
  setCenterX(arg0: number): void;
  setCenterZ(arg0: number): void;
  setLocked(arg0: boolean): void;
  setScale(arg0: JavaOpaque<"org.bukkit.map.MapView$Scale">): void;
  setTrackingPosition(arg0: boolean): void;
  setUnlimitedTracking(arg0: boolean): void;
  setWorld(arg0: JavaOpaque<"org.bukkit.World">): void;
}
export type CraftMapView = CraftMapViewMembers & JavaOpaque<"org.bukkit.map.MapView">;
export interface CraftMapViewStatics {
  new(arg0: j_net_minecraft_world_level_saveddata_maps.MapItemSavedData): CraftMapView;
}

/** JVM class org.bukkit.craftbukkit.map.RenderData. */
export interface RenderDataMembers {
  buffer: Array<number>;
  readonly cursors: JavaList<JavaOpaque<"org.bukkit.map.MapCursor">>;
}
export type RenderData = RenderDataMembers;
export interface RenderDataStatics {
  new(): RenderData;
}
