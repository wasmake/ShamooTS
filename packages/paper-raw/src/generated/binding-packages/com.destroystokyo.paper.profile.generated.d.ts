// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_profile from './org.bukkit.profile.generated.js';

/** JVM interface com.destroystokyo.paper.profile.PlayerProfile. */
export interface PlayerProfileMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_profile.PlayerProfile_2];
  clearProperties(): void;
  clone(): PlayerProfile;
  complete(): boolean;
  complete(arg0: boolean): boolean;
  complete(arg0: boolean, arg1: boolean): boolean;
  completeFromCache(): boolean;
  completeFromCache(arg0: boolean): boolean;
  completeFromCache(arg0: boolean, arg1: boolean): boolean;
  getId(): JavaOpaque<"java.util.UUID"> | null;
  getName(): string | null;
  getProperties(): JavaSet<ProfileProperty>;
  getTextures(): j_org_bukkit_profile.PlayerTextures;
  hasProperty(arg0: string | null): boolean;
  hasTextures(): boolean;
  isComplete(): boolean;
  removeProperties(arg0: JavaCollection<ProfileProperty>): boolean;
  removeProperty(arg0: ProfileProperty): boolean;
  removeProperty(arg0: string | null): boolean;
  setId(arg0: JavaOpaque<"java.util.UUID"> | null): JavaOpaque<"java.util.UUID"> | null;
  setName(arg0: string | null): string;
  setProperties(arg0: JavaCollection<ProfileProperty>): void;
  setProperty(arg0: ProfileProperty): void;
  setTextures(arg0: j_org_bukkit_profile.PlayerTextures | null): void;
  update(): PromiseLike<PlayerProfile>;
}
export type PlayerProfile = PlayerProfileMembers & j_org_bukkit_profile.PlayerProfile_2;
export interface PlayerProfileStatics {
}

/** JVM class com.destroystokyo.paper.profile.ProfileProperty. */
export interface ProfilePropertyMembers {
  equals(arg0: object | null): boolean;
  getName(): string;
  getSignature(): string | null;
  getValue(): string;
  hashCode(): number;
  isSigned(): boolean;
}
export type ProfileProperty = ProfilePropertyMembers;
export interface ProfilePropertyStatics {
  new(arg0: string, arg1: string): ProfileProperty;
  new(arg0: string, arg1: string, arg2: string | null): ProfileProperty;
}
