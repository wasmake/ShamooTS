// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface com.destroystokyo.paper.network.NetworkClient. */
export interface NetworkClientMembers {
  getAddress(): JavaOpaque<"java.net.InetSocketAddress">;
  getProtocolVersion(): number;
  getVirtualHost(): JavaOpaque<"java.net.InetSocketAddress"> | null;
}
export type NetworkClient = NetworkClientMembers;
export interface NetworkClientStatics {
}

/** JVM interface com.destroystokyo.paper.network.StatusClient. */
export interface StatusClientMembers {
  readonly __javaSupertypes?: readonly [NetworkClient];
  isLegacy(): boolean;
}
export type StatusClient = StatusClientMembers & NetworkClient;
export interface StatusClientStatics {
}
