// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface io.papermc.paper.registry.data.client.ClientTextureAsset. */
export interface ClientTextureAssetMembers {
  identifier(): JavaOpaque<"net.kyori.adventure.key.Key">;
  texturePath(): JavaOpaque<"net.kyori.adventure.key.Key">;
}
export type ClientTextureAsset = ClientTextureAssetMembers;
export interface ClientTextureAssetStatics {
  clientTextureAsset(arg0: string): ClientTextureAsset;
  clientTextureAsset(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): ClientTextureAsset;
  clientTextureAsset(arg0: JavaOpaque<"net.kyori.adventure.key.Key">, arg1: JavaOpaque<"net.kyori.adventure.key.Key">): ClientTextureAsset;
}
