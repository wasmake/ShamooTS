// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_ban from './org.bukkit.ban.generated.js';

/** JVM interface io.papermc.paper.ban.BanListType. */
export interface BanListTypeMembers<T = unknown> {
  typeClass(): JavaClass<T>;
}
export type BanListType<T = unknown> = BanListTypeMembers<T>;
export interface BanListTypeStatics {
  readonly IP: BanListType<j_org_bukkit_ban.IpBanList>;
  readonly PROFILE: BanListType<j_org_bukkit_ban.ProfileBanList>;
}
