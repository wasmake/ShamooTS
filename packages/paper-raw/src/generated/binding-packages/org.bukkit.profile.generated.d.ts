// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_configuration_serialization from './org.bukkit.configuration.serialization.generated.js';

/** JVM interface org.bukkit.profile.PlayerProfile. */
export interface PlayerProfile_2Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">, j_org_bukkit_configuration_serialization.ConfigurationSerializable];
  clone(): PlayerProfile_2;
  getName(): string | null;
  getTextures(): PlayerTextures;
  getUniqueId(): JavaOpaque<"java.util.UUID"> | null;
  isComplete(): boolean;
  setTextures(arg0: PlayerTextures | null): void;
  update(): PromiseLike<PlayerProfile_2>;
}
export type PlayerProfile_2 = PlayerProfile_2Members & JavaOpaque<"java.lang.Cloneable"> & j_org_bukkit_configuration_serialization.ConfigurationSerializable;
export interface PlayerProfile_2Statics {
}

/** JVM interface org.bukkit.profile.PlayerTextures. */
export interface PlayerTexturesMembers {
  clear(): void;
  getCape(): JavaOpaque<"java.net.URL"> | null;
  getSkin(): JavaOpaque<"java.net.URL"> | null;
  getSkinModel(): PlayerTextures_SkinModel;
  getTimestamp(): bigint;
  isEmpty(): boolean;
  isSigned(): boolean;
  setCape(arg0: JavaOpaque<"java.net.URL"> | null): void;
  setSkin(arg0: JavaOpaque<"java.net.URL"> | null): void;
  setSkin(arg0: JavaOpaque<"java.net.URL"> | null, arg1: PlayerTextures_SkinModel | null): void;
}
export type PlayerTextures = PlayerTexturesMembers;
export interface PlayerTexturesStatics {
}

/** Live JVM enum org.bukkit.profile.PlayerTextures$SkinModel; constants are host handles, not strings. */
export type PlayerTextures_SkinModel = JavaEnum<"org.bukkit.profile.PlayerTextures$SkinModel", "CLASSIC" | "SLIM"> & PlayerTextures_SkinModelMembers;
export interface PlayerTextures_SkinModelMembers {
}
export interface PlayerTextures_SkinModelStatics {
  readonly CLASSIC: PlayerTextures_SkinModel;
  readonly SLIM: PlayerTextures_SkinModel;
  valueOf(arg0: string): PlayerTextures_SkinModel;
  values(): Array<PlayerTextures_SkinModel>;
}
