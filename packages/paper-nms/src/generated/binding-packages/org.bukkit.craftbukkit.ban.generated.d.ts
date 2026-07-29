// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_server_players from './net.minecraft.server.players.generated.js';

/** JVM class org.bukkit.craftbukkit.ban.CraftIpBanEntry. */
export interface CraftIpBanEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>];
  getBanTarget(): JavaOpaque<"java.net.InetAddress">;
  getCreated(): JavaOpaque<"java.util.Date">;
  getExpiration(): JavaOpaque<"java.util.Date">;
  getReason(): string;
  getSource(): string;
  getTarget(): string;
  remove(): void;
  save(): void;
  setCreated(arg0: JavaOpaque<"java.util.Date">): void;
  setExpiration(arg0: JavaOpaque<"java.util.Date">): void;
  setReason(arg0: string): void;
  setSource(arg0: string): void;
}
export type CraftIpBanEntry = CraftIpBanEntryMembers & JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
export interface CraftIpBanEntryStatics {
  new(arg0: string, arg1: j_net_minecraft_server_players.IpBanListEntry, arg2: j_net_minecraft_server_players.IpBanList): CraftIpBanEntry;
}

/** JVM class org.bukkit.craftbukkit.ban.CraftIpBanList. */
export interface CraftIpBanListMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.ban.IpBanList">];
  addBan(arg0: string, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  addBan(arg0: JavaOpaque<"java.net.InetAddress">, arg1: string, arg2: JavaOpaque<"java.time.Duration">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  addBan(arg0: JavaOpaque<"java.net.InetAddress">, arg1: string, arg2: JavaOpaque<"java.time.Instant">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  addBan(arg0: JavaOpaque<"java.net.InetAddress">, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  getBanEntries(): JavaSet<JavaOpaque<"org.bukkit.BanEntry">>;
  getBanEntry(arg0: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  getBanEntry(arg0: JavaOpaque<"java.net.InetAddress">): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>;
  getEntries(): JavaSet<JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"java.net.InetAddress">]>>;
  isBanned(arg0: string): boolean;
  isBanned(arg0: JavaOpaque<"java.net.InetAddress">): boolean;
  pardon(arg0: string): void;
  pardon(arg0: JavaOpaque<"java.net.InetAddress">): void;
}
export type CraftIpBanList = CraftIpBanListMembers & JavaOpaque<"org.bukkit.ban.IpBanList">;
export interface CraftIpBanListStatics {
  new(arg0: j_net_minecraft_server_players.IpBanList): CraftIpBanList;
}

/** JVM class org.bukkit.craftbukkit.ban.CraftProfileBanEntry. */
export interface CraftProfileBanEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>];
  getBanTarget(): JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">;
  getCreated(): JavaOpaque<"java.util.Date">;
  getExpiration(): JavaOpaque<"java.util.Date">;
  getReason(): string;
  getSource(): string;
  getTarget(): string;
  remove(): void;
  save(): void;
  setCreated(arg0: JavaOpaque<"java.util.Date">): void;
  setExpiration(arg0: JavaOpaque<"java.util.Date">): void;
  setReason(arg0: string): void;
  setSource(arg0: string): void;
}
export type CraftProfileBanEntry = CraftProfileBanEntryMembers & JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
export interface CraftProfileBanEntryStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: j_net_minecraft_server_players.UserBanListEntry, arg2: j_net_minecraft_server_players.UserBanList): CraftProfileBanEntry;
}

/** JVM class org.bukkit.craftbukkit.ban.CraftProfileBanList. */
export interface CraftProfileBanListMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.ban.ProfileBanList">];
  addBan(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.time.Duration">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.time.Instant">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: string, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.time.Duration">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.time.Instant">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  addBan(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">, arg1: string, arg2: JavaOpaque<"java.util.Date">, arg3: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  getBanEntries(): JavaSet<JavaOpaque<"org.bukkit.BanEntry">>;
  getBanEntry(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  getBanEntry(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  getBanEntry(arg0: string): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  getBanEntry(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">): JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>;
  getEntries(): JavaSet<JavaOpaque<"org.bukkit.BanEntry", [JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">]>>;
  isBanned(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">): boolean;
  isBanned(arg0: string): boolean;
  isBanned(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">): boolean;
  pardon(arg0: JavaOpaque<"com.destroystokyo.paper.profile.PlayerProfile">): void;
  pardon(arg0: string): void;
  pardon(arg0: JavaOpaque<"org.bukkit.profile.PlayerProfile">): void;
}
export type CraftProfileBanList = CraftProfileBanListMembers & JavaOpaque<"org.bukkit.ban.ProfileBanList">;
export interface CraftProfileBanListStatics {
  new(arg0: j_net_minecraft_server_players.UserBanList): CraftProfileBanList;
}
