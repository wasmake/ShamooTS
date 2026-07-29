// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_profile from './com.destroystokyo.paper.profile.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_profile from './org.bukkit.profile.generated.js';

/** JVM interface org.bukkit.ban.IpBanList. */
export interface IpBanListMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.BanList<JavaOpaque<"java.net.InetAddress">>];
}
export type IpBanList = IpBanListMembers & j_org_bukkit.BanList<JavaOpaque<"java.net.InetAddress">>;
export interface IpBanListStatics {
}

/** JVM interface org.bukkit.ban.ProfileBanList. */
export interface ProfileBanListMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit.BanList<j_com_destroystokyo_paper_profile.PlayerProfile>];
  addBan(arg0: j_com_destroystokyo_paper_profile.PlayerProfile, arg1: string | null, arg2: JavaOpaque<"java.util.Date"> | null, arg3: string | null): j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> | null;
  addBan<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: j_org_bukkit_profile.PlayerProfile_2, arg1: string | null, arg2: JavaOpaque<"java.time.Duration"> | null, arg3: string | null): E | null;
  addBan<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: j_org_bukkit_profile.PlayerProfile_2, arg1: string | null, arg2: JavaOpaque<"java.time.Instant"> | null, arg3: string | null): E | null;
  addBan<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: j_org_bukkit_profile.PlayerProfile_2, arg1: string | null, arg2: JavaOpaque<"java.util.Date"> | null, arg3: string | null): E | null;
  getBanEntry<E /* extends j_org_bukkit.BanEntry<j_com_destroystokyo_paper_profile.PlayerProfile> */>(arg0: j_org_bukkit_profile.PlayerProfile_2): E | null;
  isBanned(arg0: j_org_bukkit_profile.PlayerProfile_2): boolean;
  pardon(arg0: j_org_bukkit_profile.PlayerProfile_2): void;
}
export type ProfileBanList = ProfileBanListMembers & j_org_bukkit.BanList<j_com_destroystokyo_paper_profile.PlayerProfile>;
export interface ProfileBanListStatics {
}
