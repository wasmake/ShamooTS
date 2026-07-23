// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';

/** JVM class org.bukkit.craftbukkit.profile.CraftPlayerProfile. */
export interface CraftPlayerProfileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">, JavaOpaque<"com.destroystokyo.paper.profile.SharedPlayerProfile">, JavaOpaque<"org.bukkit.profile.PlayerProfile">];
  buildGameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  buildResolvableProfile(): j_net_minecraft_world_item_component.ResolvableProfile;
  clearProperties(): void;
  clone(): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): CraftPlayerProfile;
  clone(): JavaOpaque<"org.bukkit.profile.PlayerProfile">;
  complete(arg0: boolean): boolean;
  complete(arg0: boolean, arg1: boolean): boolean;
  completeFromCache(): boolean;
  completeFromCache(arg0: boolean): boolean;
  completeFromCache(arg0: boolean, arg1: boolean): boolean;
  equals(arg0: object): boolean;
  getId(): JavaOpaque<"java.util.UUID">;
  getName(): string | null;
  getProperties(): JavaSet<JavaOpaque<"com.destroystokyo.paper.profile.ProfileProperty">>;
  getProperty(arg0: string): JavaOpaque<"com.mojang.authlib.properties.Property"> | null;
  getTextures(): CraftPlayerTextures;
  getTextures(): JavaOpaque<"org.bukkit.profile.PlayerTextures">;
  getUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  hasProperty(arg0: string): boolean;
  hashCode(): number;
  isComplete(): boolean;
  removeProperty(arg0: string): boolean;
  serialize(): JavaMap<string, object>;
  setId(arg0: JavaOpaque<"java.util.UUID">): JavaOpaque<"java.util.UUID">;
  setName(arg0: string): string;
  setProperties(arg0: JavaCollection<JavaOpaque<"com.destroystokyo.paper.profile.ProfileProperty">>): void;
  setProperty(arg0: JavaOpaque<"com.destroystokyo.paper.profile.ProfileProperty">): void;
  setProperty(arg0: string, arg1: JavaOpaque<"com.mojang.authlib.properties.Property">): void | null;
  setTextures(arg0: JavaOpaque<"org.bukkit.profile.PlayerTextures">): void | null;
  toString(): string;
  update(): PromiseLike<object>;
}
export type CraftPlayerProfile = CraftPlayerProfileMembers & JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile"> & JavaOpaque<"com.destroystokyo.paper.profile.SharedPlayerProfile"> & JavaOpaque<"org.bukkit.profile.PlayerProfile">;
export interface CraftPlayerProfileStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): CraftPlayerProfile;
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: string): CraftPlayerProfile;
  new(arg0: j_net_minecraft_world_item_component.ResolvableProfile): CraftPlayerProfile;
  deserialize(arg0: JavaMap<string, object>): CraftPlayerProfile;
  getProperty(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: string): JavaOpaque<"com.mojang.authlib.properties.Property"> | null;
  toString(arg0: JavaOpaque<"com.mojang.authlib.properties.PropertyMap">): string;
  validateSkullProfile(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): JavaOpaque<"com.mojang.authlib.GameProfile">;
  validateSkullProfile(arg0: j_net_minecraft_world_item_component.ResolvableProfile): j_net_minecraft_world_item_component.ResolvableProfile;
}

/** JVM class org.bukkit.craftbukkit.profile.CraftPlayerTextures. */
export interface CraftPlayerTexturesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.profile.PlayerTextures">];
  clear(): void;
  copyFrom(arg0: JavaOpaque<"org.bukkit.profile.PlayerTextures">): void;
  equals(arg0: object): boolean;
  getCape(): JavaOpaque<"java.net.URL"> | null;
  getSkin(): JavaOpaque<"java.net.URL"> | null;
  getSkinModel(): JavaOpaque<"org.bukkit.profile.PlayerTextures$SkinModel">;
  getTimestamp(): bigint;
  hashCode(): number;
  isEmpty(): boolean;
  isSigned(): boolean;
  rebuildPropertyIfDirty(): void;
  setCape(arg0: JavaOpaque<"java.net.URL">): void | null;
  setSkin(arg0: JavaOpaque<"java.net.URL">): void | null;
  setSkin(arg0: JavaOpaque<"java.net.URL">, arg1: JavaOpaque<"org.bukkit.profile.PlayerTextures$SkinModel">): void | null;
  toString(): string;
}
export type CraftPlayerTextures = CraftPlayerTexturesMembers & JavaOpaque<"org.bukkit.profile.PlayerTextures">;
export interface CraftPlayerTexturesStatics {
  new(arg0: JavaOpaque<"com.destroystokyo.paper.profile.SharedPlayerProfile">): CraftPlayerTextures;
}

/** JVM class org.bukkit.craftbukkit.profile.CraftProfileProperty. */
export interface CraftProfilePropertyMembers {
}
export type CraftProfileProperty = CraftProfilePropertyMembers;
export interface CraftProfilePropertyStatics {
  decodePropertyValue(arg0: string): JavaOpaque<"com.google.gson.JsonObject"> | null;
  deserialize(arg0: JavaMap<object, object>): JavaOpaque<"com.mojang.authlib.properties.Property">;
  encodePropertyValue(arg0: JavaOpaque<"com.google.gson.JsonObject">, arg1: CraftProfileProperty_JsonFormatter): string;
  equals(arg0: JavaOpaque<"com.mojang.authlib.properties.Property">, arg1: JavaOpaque<"com.mojang.authlib.properties.Property">): boolean | null;
  hasValidSignature(arg0: JavaOpaque<"com.mojang.authlib.properties.Property">): boolean;
  hashCode(arg0: JavaOpaque<"com.mojang.authlib.properties.Property">): number;
  serialize(arg0: JavaOpaque<"com.mojang.authlib.properties.Property">): JavaMap<string, object>;
  toString(arg0: JavaOpaque<"com.mojang.authlib.properties.Property">): string;
}

/** JVM interface org.bukkit.craftbukkit.profile.CraftProfileProperty$JsonFormatter. */
export interface CraftProfileProperty_JsonFormatterMembers {
  format(arg0: JavaOpaque<"com.google.gson.JsonElement">): string;
}
export type CraftProfileProperty_JsonFormatter = CraftProfileProperty_JsonFormatterMembers;
export interface CraftProfileProperty_JsonFormatterStatics {
  readonly COMPACT: CraftProfileProperty_JsonFormatter;
}
